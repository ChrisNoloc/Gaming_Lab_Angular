import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';

import { CategorieJeu } from '../dot/jeu/categorie-jeu';
import {JeuxService} from './jeux.service';
import { Jeu } from '../dot/jeu/jeu';
import { Joueur } from '../dot/utilisateur/joueur';
import { ConnexionService } from '../commun/connexion/connexion.service';

@Component({
  selector: 'app-jeux',
  templateUrl: './jeux.component.html',
  styleUrls: ['./jeux.component.css']
})
export class JeuxComponent implements OnInit {

  categoriesJeu: CategorieJeu[];
  idCategorieJeu: number;
  jeux: Jeu[];
  joueurCo: Joueur;

  constructor(
    private jeuxService: JeuxService, 
    private _route: ActivatedRoute,
    private sanitizer: DomSanitizer,
    private connexionService: ConnexionService) {

    this.sanitizer.bypassSecurityTrustHtml('<img class="thumb" src="localhost:8181/{{jeu.imageJeu}}">');
    
    this.jeuxService.getAllCategorieJeu().subscribe(data => {
      this.categoriesJeu = data;
    });

    this._route.params.subscribe((params: Params) => {
      if (params['idCategorieJeu'] != undefined) {
        this.idCategorieJeu = Number(params['idCategorieJeu']);
        this.jeuxService.getAllJeuxByCategorie(this.idCategorieJeu).subscribe(data => {
          this.jeux = data;
        }); 
      }
      else {
        this.jeuxService.getAllJeux().subscribe(data => {
          this.jeux = data;
        })
      }
    });

    this.connexionService.joueurConnecteBS.subscribe(joueur => {
      this.joueurCo = joueur;
    });
  }

  ngOnInit() {
  }

  getAllJeuxByIdCategorie() {
    this.jeuxService.getAllJeuxByCategorie(this.idCategorieJeu).subscribe(data => {
      this.jeux = data;
    }); 
  }

  getImageJeu(jeu: Jeu) {
    return this.sanitizer.bypassSecurityTrustResourceUrl("localhost:8181/" + jeu.imageJeu);
  }
}
