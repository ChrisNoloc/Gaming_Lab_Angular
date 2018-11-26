import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CommentaireForum } from '../../dot/forum/commentaire-forum';
import { Joueur } from '../../dot/utilisateur/joueur';
import { ForumService } from '../forum.service';
import { JoueurCommentaireForum } from '../../dot/forum/joueur-commentaire-forum';
import { SujetForum } from '../../dot/forum/sujet-forum';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-reponse-commentaire',
  templateUrl: './reponse-commentaire.component.html',
  styleUrls: ['./reponse-commentaire.component.css']
})
export class ReponseCommentaireComponent implements OnInit {

  @Input() commentaireParent : CommentaireForum;
  @Input() sujet : SujetForum;
  @Input() joueurCo : Joueur;
  @Output() repondu = new EventEmitter<any>();
  nouveauCommentaire : CommentaireForum; 

  constructor(
    private forumService : ForumService
  ) { }

  ngOnInit() {
    this.nouveauCommentaire = new CommentaireForum();
  }

  repondreCommentaire() {
    if (this.nouveauCommentaire.contenu != null && this.joueurCo != null) {
      if (this.commentaireParent != undefined) {
        this.nouveauCommentaire.idCommentaireSup= this.commentaireParent.idCommentaire;
      } else {
        this.nouveauCommentaire.idCommentaireSup = null;
      }
      
      this.nouveauCommentaire.dateEmission = new Date();
      this.nouveauCommentaire.joueur = this.joueurCo;
      this.nouveauCommentaire.note = 0;
      this.nouveauCommentaire.sujetForum = this.sujet;

      this.forumService.ajouterCommentaire(this.nouveauCommentaire).subscribe(data => this.nouveauCommentaire = data);
  
      // if(this.nouveauCommentaire.idCommentaire != null) {
      //   let nouveauJoueurCommentaireForum = new JoueurCommentaireForum();
      //   nouveauJoueurCommentaireForum.idJoueur = this.joueurCo.idUtilisateur;
      //   nouveauJoueurCommentaireForum.commentaireForum = this.nouveauCommentaire;
      //   nouveauJoueurCommentaireForum.dateNote = new Date();
      //   nouveauJoueurCommentaireForum.vote = 1;
      //   console.log("JCF : " + JSON.stringify(nouveauJoueurCommentaireForum));
      //   this.forumService.insertJoueurCommentaireForum(nouveauJoueurCommentaireForum).subscribe(data => nouveauJoueurCommentaireForum = data);
      // }
  
      this.nouveauCommentaire = new CommentaireForum();
      this.repondu.emit(true);
    }
  }
}
