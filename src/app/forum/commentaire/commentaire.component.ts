import { Component, OnInit, Input } from '@angular/core';
import { CommentaireForum } from '../../dot/forum/commentaire-forum';
import { ForumService } from '../forum.service';
import { ConnexionService } from '../../commun/connexion/connexion.service';
import { Joueur } from '../../dot/utilisateur/joueur';
import { SujetForum } from '../../dot/forum/sujet-forum';

@Component({
  selector: 'app-commentaire',
  templateUrl: './commentaire.component.html',
  styleUrls: ['./commentaire.component.css']
})
export class CommentaireComponent implements OnInit {

  @Input() commentaire : CommentaireForum;
  joueurCo : Joueur;
  commentairesEnfant : CommentaireForum[];
  repond: Boolean = false;

  constructor(
    private forumService: ForumService,
    private connexionService: ConnexionService
  ) { }

  ngOnInit() {
    this.connexionService.joueurConnecteBS.subscribe(data => this.joueurCo = data);

    this.forumService.getAllCommentairesForumEnfant(this.commentaire.idCommentaire).subscribe(data => this.commentairesEnfant = data);
  }

  toggle() {
    this.repond = !this.repond;
  }


}
