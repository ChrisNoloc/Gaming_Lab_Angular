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
    //Récupérer l'utilisateur connecté
    this.connexionService.joueurConnecteBS.subscribe(joueur => {
      this.joueurCo = joueur;
    });

    //Récupérer JoueurSujetForum
    if (this.joueurCo) {
      this.forumService.getJoueurCommentaireForumByIdJoueurCommentaire(this.joueurCo.idUtilisateur, this.commentaire.idCommentaire).subscribe(data => {
        this.joueurCommentaireForum = data;
        this.voteUtilisateur = data.vote;
      });
    }
  }

  upvote() {
    if (this.joueurCo) {
      let vote = this.voteUtilisateur == 1 ? 0 : 1;
      this.commitVote(vote);
    } 
  }

  downvote() {
    if (this.joueurCo) {
      let vote = this.voteUtilisateur == -1 ? 0 : -1;
      this.commitVote(vote);
    }
  }

  commitVote(vote : number) {
    if (this.joueurCommentaireForum) {
      //Mettre à jour le joueur sujet forum
      this.joueurCommentaireForum.dateNote = new Date();
      this.joueurCommentaireForum.vote = vote;

      this.forumService.updateJoueurCommentaireForum(this.joueurCommentaireForum);
    } else {
      //Créer un nouveau joueur sujet forum
      let nouveauJoueurCommentaireForum = new JoueurCommentaireForum();
      nouveauJoueurCommentaireForum.dateNote = new Date();
      nouveauJoueurCommentaireForum.joueur = this.joueurCo;
      nouveauJoueurCommentaireForum.commentaireForum = this.commentaire;
      nouveauJoueurCommentaireForum.vote = vote;

      this.forumService.insertJoueurCommentaireForum(this.joueurCommentaireForum).subscribe(data => {
        this.joueurCommentaireForum = data;
      });
    }
  }

}
