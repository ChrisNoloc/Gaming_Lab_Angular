import { Component, OnInit } from '@angular/core';
import { SujetForum } from '../dot/forum/sujet-forum';
import { CategorieForum } from '../dot/forum/categorie-forum';
import { Joueur } from '../dot/utilisateur/joueur';
import { ForumService } from './forum.service';
import { ConnexionService } from '../commun/connexion/connexion.service';
import { ActivatedRoute, Params } from '@angular/router';
import { CommentaireForum } from '../dot/forum/commentaire-forum';
import { JoueurSujetForum } from '../dot/forum/joueur-sujet-forum';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {

  categoriesForum: CategorieForum[];
  idCategorieForum: number;
  sujets: SujetForum[];
  joueurCo: Joueur;
  // votesSujetJoueurCo : JoueurSujetForum[];
  // sujetsUpvoted : SujetForum[];
  // sujetsDownvoted : SujetForum[];

  constructor(
    private forumService : ForumService,
    private connexionService : ConnexionService,
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    //Récupérer toutes les catégories du forum
    this.forumService.getAllCategorieForum().subscribe(data => {
      this.categoriesForum = data;
    });

    //Récupérer l'utilisateur connecté
    this.connexionService.joueurConnecteBS.subscribe(joueur => {
      this.joueurCo = joueur;
    });
    
    this.refresh();
  }

  refresh() {
    //Récupérer tous les sujets
    this._route.params.subscribe((params: Params) => {
      if (params['idCategorie'] != undefined) {
        this.idCategorieForum = Number(params['idCategorie']);
        this.forumService.getAllSujetByCategorieForum(this.idCategorieForum).subscribe(data => {
          this.sujets = data;
        }); 
      }
      else {
        this.forumService.getAllSujet().subscribe(data => {
          this.sujets = data;
        })
      }
    });
  }
}
