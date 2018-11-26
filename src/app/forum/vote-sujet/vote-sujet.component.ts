import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SujetForum } from '../../dot/forum/sujet-forum';
import { ConnexionService } from '../../commun/connexion/connexion.service';
import { ForumService } from '../forum.service';
import { JoueurSujetForum } from '../../dot/forum/joueur-sujet-forum';
import { Joueur } from '../../dot/utilisateur/joueur';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-vote-sujet',
  templateUrl: './vote-sujet.component.html',
  styleUrls: ['./vote-sujet.component.css']
})
export class VoteSujetComponent implements OnInit {

  @Input() sujet : SujetForum;
  @Output() aVote = new EventEmitter<any>();
  joueurSujetForum : JoueurSujetForum;
  voteUtilisateur : number;
  joueurCo: Joueur;

  constructor(
    private forumService : ForumService,
    private connexionService : ConnexionService
  ) { }

  ngOnInit() {
    this.connexionService.joueurConnecteBS.subscribe(joueur => {
      this.joueurCo = joueur;
    });

    if (this.joueurCo != null) {
      this.getJoueurSujetForum("INIT");
    }
  }

  upvote() {
    if (this.joueurCo != null) {
      this.getJoueurSujetForum("UPVOTE");
      let vote = this.voteUtilisateur == 1 ? 0 : 1;
      this.commitVote(vote);
    } 
  }

  downvote() {
    if (this.joueurCo != null) {
      this.getJoueurSujetForum("DOWNVOTE");
      let vote = this.voteUtilisateur == -1 ? 0 : -1;
      this.commitVote(vote);
    }
  }

  getJoueurSujetForum(qui : String) {
    console.log(qui);
    if(this.joueurCo != null) {
      this.forumService.getJoueurSujetForumByIdJoueurSujet(this.joueurCo.idUtilisateur, this.sujet.idSujet).subscribe(data => {
        console.log("DATA : " + data + " par " + qui);
        if (data != null) {
          this.joueurSujetForum = data;
          this.voteUtilisateur = data.vote;
          console.log("getJSF by : " + qui + " avec voteUtilisateur = " + this.voteUtilisateur);
        }
      });
    }
  }

  commitVote(vote : number) {
    
    console.log("Vote Utilisateur dans commit " + this.voteUtilisateur + "/ vote = " + vote);

    if (this.joueurSujetForum != null) {
      console.log("Vote du jsf :" + this.joueurSujetForum.vote);

      //Mettre à jour le joueur sujet forum
      this.joueurSujetForum.dateNote = new Date();
      this.joueurSujetForum.vote = vote;

      this.forumService.updateJoueurSujetForum(this.joueurSujetForum).subscribe(data => {
        this.joueurSujetForum = data;
        this.voteUtilisateur = data.vote;
        this.aVote.emit(true);
      });
    } else {
      //Créer un nouveau joueur sujet forum
      let nouveauJoueurSujetForum = new JoueurSujetForum();
      nouveauJoueurSujetForum.dateNote = new Date();
      nouveauJoueurSujetForum.idJoueur = this.joueurCo.idUtilisateur;
      nouveauJoueurSujetForum.sujetForum = this.sujet;
      nouveauJoueurSujetForum.vote = vote;

      this.forumService.insertJoueurSujetForum(nouveauJoueurSujetForum).subscribe(data => {
        this.joueurSujetForum = data;
        this.voteUtilisateur = data.vote;
        this.aVote.emit(true);
      });
    }

    //this.getJoueurSujetForum("COMMIT");
  }

  

}
