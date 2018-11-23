import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import {NgForm} from '@angular/forms';

import { JeuxService } from '../jeux.service';
import { Jeu } from '../../dot/jeu/jeu';
import { CommentaireJeu } from '../../dot/jeu/commentaire-jeu';
import { Joueur } from '../../dot/utilisateur/joueur';
import { ConnexionService } from '../../commun/connexion/connexion.service';

@Component({
  selector: 'app-jeu',
  templateUrl: './jeu.component.html',
  styleUrls: ['./jeu.component.css']
})
export class JeuComponent implements OnInit {
  idJeu: number;
  jeu: Jeu;
  urlJeu: SafeResourceUrl;
  commentairesJeu: CommentaireJeu[];
  joueurCo: Joueur;
  commentaireJoueurCo : CommentaireJeu;
  fullScreen: Boolean = false;

  constructor(
              private jeuxService: JeuxService, 
              private _route: ActivatedRoute,
              private sanitizer: DomSanitizer,
              private connexionService: ConnexionService
            ) { }

  ngOnInit() { 
    this._route.params.subscribe((params: Params) => {
      if(params["idJeu"] != undefined) {
        this.idJeu = Number(params['idJeu']);
        this.jeuxService.getJeuById(this.idJeu).subscribe(data => {
          this.jeu = data;

          this.jeuxService.getAllCommentaireJeuByJeu(this.idJeu).subscribe(data => {
            this.commentairesJeu = data;
          });

          this.connexionService.joueurConnecteBS.subscribe(joueur => {
            this.joueurCo = joueur;
            this.commentaireJoueurCo = new CommentaireJeu();
          });
        });
      }
    });
  }

  jouerJeu() {
    return this.sanitizer.bypassSecurityTrustResourceUrl("http://localhost:8182/" + this.jeu.lien + "/index.html");
  }

  ajouterCommentaireJeu() {
    this.commentaireJoueurCo.dateEmission = new Date();
    this.commentaireJoueurCo.joueur = this.joueurCo;
    this.commentaireJoueurCo.jeu = this.jeu;

    this.jeuxService.ajouterCommentaireJeu(this.commentaireJoueurCo).subscribe(data => {
      this.commentaireJoueurCo = data;

      this.jeuxService.getAllCommentaireJeuByJeu(this.idJeu).subscribe(data => {
        this.commentairesJeu = data;
      });
    });

    // this.jeuxService.getJeuById(this.idJeu).subscribe(data => {
    //   this.jeu = data;
      
      

    //   this.connexionService.joueurConnecteBS.subscribe(joueur => {
    //     this.joueurCo = joueur;
    //   });
    // });
  }

  toggleFullScreen() {
    this.fullScreen = !this.fullScreen;
  }

}
