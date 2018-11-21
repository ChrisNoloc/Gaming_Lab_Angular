import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';

// import {RechercheService} from '../recherche/recherche.service';
// import {RechercheModule} from '../recherche/recherche.module';

import {Jeu} from '../../dot/jeu/jeu';

import { Subject } from 'rxjs/Subject';
import { Recherche } from '../../dot/utilitaire/recherche';

import {RechercheComponent} from '../recherche/recherche.component';
import {ConnexionComponent} from '../connexion/connexion.component';
import { Joueur } from '../../dot/utilisateur/joueur';
import { ConnexionService } from '../connexion/connexion.service';
import {PanierComponent} from '../../boutique/panier/panier.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  joueurCo : Joueur;
  public connexion: boolean = false;

  constructor(public connexionService: ConnexionService,
    private sanitizer: DomSanitizer) {
    this.connexionService.joueurConnecteBS.subscribe(j => {
        this.joueurCo = j;
    });
  }

  ngOnInit() {
  }

  toggle() {
    this.connexion = !this.connexion;
  }

  urlImageJoueur() {
    return this.sanitizer.bypassSecurityTrustStyle("[style.background]='../../../assets/img/imgJoueur{{this.joueurCo.idUtilisateur}}'.png");
  }


}
