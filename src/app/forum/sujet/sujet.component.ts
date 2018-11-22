import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ConnexionService } from '../../commun/connexion/connexion.service';
import { ForumService } from '../forum.service';
import { SujetForum } from '../../dot/forum/sujet-forum';
import { CommentaireForum } from '../../dot/forum/commentaire-forum';
import { CategorieForum } from '../../dot/forum/categorie-forum';
import { Joueur } from '../../dot/utilisateur/joueur';

@Component({
  selector: 'app-sujet',
  templateUrl: './sujet.component.html',
  styleUrls: ['./sujet.component.css']
})
export class SujetComponent implements OnInit {

  idSujet: number;
  sujet: SujetForum;
  commentaires: CommentaireForum[];
  categoriesForum: CategorieForum[];
  //idCategorieForum: number;
  joueurCo: Joueur;

  constructor(
    private forumService : ForumService,
    private connexionService : ConnexionService,
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      if(params["idSujet"] != undefined) {
        this.idSujet = Number(params['idSujet']);
        this.forumService.getSujetById(this.idSujet).subscribe(data => {
          this.sujet = data;
          this.forumService.getAllCommentaireForumBySujet(this.idSujet).subscribe(data => {
            this.commentaires = data;
          });

          this.connexionService.joueurConnecteBS.subscribe(joueur => {
            this.joueurCo = joueur;
          });
        });
      }
    });
  }

}
