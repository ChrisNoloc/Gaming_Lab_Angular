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
  voteUtilisateur : number = 0;
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
    if (this.joueurCo != null) {  
      this.forumService.getJoueurSujetForumByIdJoueurSujet(this.joueurCo.idUtilisateur, this.sujet.idSujet).subscribe(data => {
        this.joueurSujetForum = data;
        this.voteUtilisateur = data.vote;
      });
    }
  }

  upvote() {
    if (this.joueurCo != null) {
      let vote = this.voteUtilisateur == 1 ? 0 : 1;
      this.commitVote(vote);
    } 
  }

  downvote() {
    if (this.joueurCo != null) {
      let vote = this.voteUtilisateur == -1 ? 0 : -1;
      this.commitVote(vote);
    }
  }

  commitVote(vote : number) {

    this.forumService.getJoueurSujetForumByIdJoueurSujet(this.joueurCo.idUtilisateur, this.sujet.idSujet).subscribe(data => this.joueurSujetForum = data);

    if (this.joueurSujetForum != null) {
      //Mettre à jour le joueur sujet forum
      this.joueurSujetForum.dateNote = new Date();
      this.joueurSujetForum.vote = vote;

      this.forumService.updateJoueurSujetForum(this.joueurSujetForum);

      this.forumService.getJoueurSujetForumByIdJoueurSujet(this.joueurCo.idUtilisateur, this.sujet.idSujet).subscribe(data => this.joueurSujetForum = data);
    } 
    else {
      //Créer un nouveau joueur sujet forum
      let nouveauJoueurSujetForum = new JoueurSujetForum();
      nouveauJoueurSujetForum.dateNote = new Date();
      nouveauJoueurSujetForum.idJoueur = this.joueurCo.idUtilisateur;
      nouveauJoueurSujetForum.sujetForum = this.sujet;
      nouveauJoueurSujetForum.vote = vote;

      this.forumService.insertJoueurSujetForum(nouveauJoueurSujetForum).subscribe(data => {
        this.joueurSujetForum = data;
        this.voteUtilisateur = data.vote;
      });
    }
    
  }

}
