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

    //Récupérer l'utilisateur connecté
    this.connexionService.joueurConnecteBS.subscribe(joueur => {
      this.joueurCo = joueur;
    });

    //Ajouter le nombre de commentaires à chaque sujet
    if (this.sujets) {
      this.sujets.forEach(sujet => {
        let listeCommentaire = new Array<CommentaireForum>();
        this.forumService.getAllCommentaireForumBySujet(sujet.idSujet);
        sujet.nombreCommentaire = listeCommentaire.length;
      });
    }
    

    //Récupérer tous les JoueurSujetForum lié à l'utilisateur connecté, puis remplir les listes de sujets que l'utilisateur a upvoté et ceux qu'il a downvoté
    // if (this.joueurCo) {
    //   this.sujetsUpvoted = new Array<SujetForum>();
    //   this.sujetsDownvoted = new Array<SujetForum>();

    //   this.forumService.getAllJoueurSujetForumByJoueur(this.joueurCo.idUtilisateur).subscribe(data => {
    //     this.votesSujetJoueurCo = data;

    //     this.votesSujetJoueurCo.forEach(jsf => {
    //       if (jsf.vote > 0) {
    //         this.sujetsUpvoted.push(jsf.sujetForum);
    //       } else if (jsf.vote < 0) {
    //         this.sujetsDownvoted.push(jsf.sujetForum);
    //       }
    //     });
    //   });
    // }
  }

  // upvote(sujet: SujetForum) : void {
  //   if (!this.sujetsUpvoted.includes(sujet)) {

  //     this.votesSujetJoueurCo.forEach(jsf => {
  //       if (jsf.sujetForum == sujet) {
  //         //On upvote un sujet auquel l'utilisateur a déjà voté
  //         //Vote = 1
  //         //Update JoueurSujetForum
  //         let vote = jsf.vote == 1 ? 0 : 1;
  //         jsf.vote = vote;
  //       }
  //     });

  //     // sujet.note++;
  //     // this.forumService.noterSujet(sujet.idSujet, sujet, this.joueurCo.idUtilisateur);
  //   }
  // }

  // downvote(sujet: SujetForum) : void {

  // }
}
