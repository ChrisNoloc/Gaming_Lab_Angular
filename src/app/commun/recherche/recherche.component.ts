import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Recherche } from '../../dot/utilitaire/recherche';
import { RechercheService } from './recherche.service';
import { Jeu } from '../../dot/jeu/jeu';
import { Joueur } from '../../dot/utilisateur/joueur';
import { Article } from '../../dot/boutique/article';
import { SujetForum } from '../../dot/communication/sujet-forum';

@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.css']
})
export class RechercheComponent implements OnInit {

  searchValue = '';
  
  motsCles = new Subject<string>();
  
  resultats : Recherche;

  resultatsJeu: Jeu[];
  resultatsJoueur: Joueur[];
  resultatsArticle: Article[];
  resultatsSujetForum: SujetForum[];

  constructor(private rechercheService: RechercheService) {

    console.log(this.searchValue);

    this.resultatsJeu = null;
    this.resultatsJoueur = null;
    this.resultatsArticle = null;
    this.resultatsSujetForum = null;
    this.resultats = null;
    

      this.rechercheService.rechercheTerme(this.motsCles)
      .subscribe(data => {
        if (data != null) {
          this.resultats = data;

          this.resultatsJeu = this.resultats.jeux;
          this.resultatsJoueur = this.resultats.joueurs;
          this.resultatsArticle = this.resultats.articles;
          this.resultatsSujetForum = this.resultats.sujetForums;
        }
        else
        {
          this.resultats = null;
        }
          
      }
    );
    
    
  }

  ngOnInit() {
  }

}
