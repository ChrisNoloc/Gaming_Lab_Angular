import { Component, OnInit, Input } from '@angular/core';
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

  joueurSujetForum : JoueurSujetForum;
  voteUtilisateur : number;
  joueurCo: Joueur;

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
      this.forumService.getJoueurSujetForumByIdJoueurSujet(this.joueurCo.idUtilisateur, this.sujet.idSujet).subscribe(data => {
        this.joueurSujetForum = data;
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
    if (this.joueurSujetForum) {
      //Mettre à jour le joueur sujet forum
      this.joueurSujetForum.dateNote = new Date();
      this.joueurSujetForum.vote = vote;

      this.forumService.updateJoueurSujetForum(this.joueurSujetForum).subscribe(data => {
        this.joueurSujetForum = data;
      });
    } else {
      //Créer un nouveau joueur sujet forum
      let nouveauJoueurSujetForum = new JoueurSujetForum();
      nouveauJoueurSujetForum.dateNote = new Date();
      nouveauJoueurSujetForum.joueur = this.joueurCo;
      nouveauJoueurSujetForum.sujetForum = this.sujet;
      nouveauJoueurSujetForum.vote = vote;

      this.forumService.insertJoueurSujetForum(this.joueurSujetForum).subscribe(data => {
        this.joueurSujetForum = data;
      });
    }
  }

}
