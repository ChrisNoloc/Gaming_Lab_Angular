import { Component, OnInit, Input } from '@angular/core';
import { CommentaireForum } from '../../dot/forum/commentaire-forum';
import { JoueurCommentaireForum } from '../../dot/forum/joueur-commentaire-forum';
import { Joueur } from '../../dot/utilisateur/joueur';
import { ForumService } from '../forum.service';
import { ConnexionService } from '../../commun/connexion/connexion.service';

@Component({
  selector: 'app-vote-commentaire',
  templateUrl: './vote-commentaire.component.html',
  styleUrls: ['./vote-commentaire.component.css']
})
export class VoteCommentaireComponent implements OnInit {

  @Input() commentaire : CommentaireForum;
  joueurCommentaireForum : JoueurCommentaireForum;
  voteUtilisateur : number;
  joueurCo : Joueur; 

  constructor(
    private forumService : ForumService,
    private connexionService : ConnexionService
  ) { }

  ngOnInit() {
    this.connexionService.joueurConnecteBS.subscribe(joueur => {
      this.joueurCo = joueur;
    });

    if (this.joueurCo != null) {
      this.getJoueurCommentaireForum("INIT");
    }
  }

  upvote() {
    if (this.joueurCo != null) {
      this.getJoueurCommentaireForum("UPVOTE");
      let vote = this.voteUtilisateur == 1 ? 0 : 1;
      this.commitVote(vote);
    } 
  }

  downvote() {
    if (this.joueurCo != null) {
      this.getJoueurCommentaireForum("DOWNVOTE");
      let vote = this.voteUtilisateur == -1 ? 0 : -1;
      this.commitVote(vote);
    }
  }

  getJoueurCommentaireForum(qui : String) {
    console.log(qui);
    if(this.joueurCo != null) {
      this.forumService.getJoueurCommentaireForumByIdJoueurCommentaire(this.joueurCo.idUtilisateur, this.commentaire.idCommentaire).subscribe(data => {
        console.log("DATA : " + data + " par " + qui);
        if (data != null) {
          this.joueurCommentaireForum = data;
          this.voteUtilisateur = data.vote;
          console.log("getJSF by : " + qui + " avec voteUtilisateur = " + this.voteUtilisateur);
        }
      });
    }
  }

  commitVote(vote : number) {

    if (this.joueurCommentaireForum != null) {
      this.joueurCommentaireForum.dateNote = new Date();
      this.joueurCommentaireForum.vote = vote;

      this.forumService.updateJoueurCommentaireForum(this.joueurCommentaireForum).subscribe(data => {
        this.joueurCommentaireForum = data;
        this.voteUtilisateur = data.vote;
      });
    } else {
      let nouveauJoueurCommentaireForum = new JoueurCommentaireForum();
      nouveauJoueurCommentaireForum.dateNote = new Date();
      nouveauJoueurCommentaireForum.idJoueur = this.joueurCo.idUtilisateur;
      nouveauJoueurCommentaireForum.commentaireForum = this.commentaire;
      nouveauJoueurCommentaireForum.vote = vote;

      this.forumService.insertJoueurCommentaireForum(nouveauJoueurCommentaireForum).subscribe(data => {
        this.joueurCommentaireForum = data;
        this.voteUtilisateur = data.vote;
      });
    }

    //this.getJoueurSujetForum("COMMIT");
  }

}
