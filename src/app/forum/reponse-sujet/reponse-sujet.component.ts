import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SujetForum } from '../../dot/forum/sujet-forum';
import { CommentaireForum } from '../../dot/forum/commentaire-forum';
import { ForumService } from '../forum.service';
import { Joueur } from '../../dot/utilisateur/joueur';
import { JoueurCommentaireForum } from '../../dot/forum/joueur-commentaire-forum';

@Component({
  selector: 'app-reponse-sujet',
  templateUrl: './reponse-sujet.component.html',
  styleUrls: ['./reponse-sujet.component.css']
})
export class ReponseSujetComponent implements OnInit {

  @Input() sujet: SujetForum;
  @Input() joueurCo: Joueur;
  @Output() repondu = new EventEmitter<boolean>();
  nouveauCommentaire : CommentaireForum; 
  
  constructor(
    private forumService : ForumService
  ) { }

  ngOnInit() {
    this.nouveauCommentaire = new CommentaireForum();
  }

  repondreCommentaire() {
      this.nouveauCommentaire.dateEmission = new Date();
      this.nouveauCommentaire.joueur = this.joueurCo;
      this.nouveauCommentaire.note = 0;
      this.nouveauCommentaire.sujetForum = this.sujet;
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
