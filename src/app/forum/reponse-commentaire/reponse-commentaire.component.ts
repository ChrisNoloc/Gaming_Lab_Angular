import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CommentaireForum } from '../../dot/forum/commentaire-forum';
import { Joueur } from '../../dot/utilisateur/joueur';
import { ForumService } from '../forum.service';
import { JoueurCommentaireForum } from '../../dot/forum/joueur-commentaire-forum';
import { CommentaireComponent } from '../commentaire/commentaire.component';

@Component({
  selector: 'app-reponse-commentaire',
  templateUrl: './reponse-commentaire.component.html',
  styleUrls: ['./reponse-commentaire.component.css']
})
export class ReponseCommentaireComponent implements OnInit {

  @Input() commentaireParent : CommentaireForum;
  @Input() joueurCo : Joueur;
  @Output() repondu = new EventEmitter<boolean>();
  nouveauCommentaire = new CommentaireForum(); 

  constructor(
    private forumService : ForumService
  ) { }

  ngOnInit() {
  }

  repondreCommentaire() {
    if (this.nouveauCommentaire.contenu) {
      
    }
    this.nouveauCommentaire.commentaireSup= this.commentaireParent;
    this.nouveauCommentaire.dateEmission = new Date();
    this.nouveauCommentaire.joueur = this.joueurCo;
    this.nouveauCommentaire.note = 0;
    this.nouveauCommentaire.sujetForum = this.commentaireParent.sujetForum;
    this.forumService.ajouterCommentaire(this.nouveauCommentaire).subscribe(data => this.nouveauCommentaire = data);

    let nouveauJoueurCommentaireForum = new JoueurCommentaireForum();
    nouveauJoueurCommentaireForum.joueur = this.joueurCo;
    nouveauJoueurCommentaireForum.commentaireForum = this.nouveauCommentaire;
    nouveauJoueurCommentaireForum.dateNote = new Date();
    nouveauJoueurCommentaireForum.vote = 1;
    this.forumService.insertJoueurCommentaireForum(nouveauJoueurCommentaireForum).subscribe(data => nouveauJoueurCommentaireForum = data);

    this.nouveauCommentaire = new CommentaireForum();
    this.repondu.emit(true);
  }

}
