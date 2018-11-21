import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommunRoutingModule } from './commun-routing.module';
import { HeaderComponent } from './header/header.component';

// Modules pour les components :

import { FormsModule } from '@angular/forms';
import { RechercheComponent } from './recherche/recherche.component';
import { RechercheService } from './recherche/recherche.service';
import { ConnexionComponent } from './connexion/connexion.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { UtilisateurService } from './utilisateur/utilisateur.service';
import { AjoutJeuComponent } from './ajout-jeu/ajout-jeu.component';
import { AjoutJeuService } from './ajout-jeu/ajout-jeu.service';
import { AccueilComponent } from './accueil/accueil.component';
import { BoutiqueModule } from '../boutique/boutique.module';

@NgModule({
  imports: [
    CommonModule,
    CommunRoutingModule,
    FormsModule,
    BoutiqueModule
  ],
  declarations: [
    HeaderComponent,
    RechercheComponent,
    ConnexionComponent,
    UtilisateurComponent,
    AjoutJeuComponent,
    AccueilComponent
  ],
  exports: [
    HeaderComponent,
    RechercheComponent,
    ConnexionComponent
  ],
  providers: [
    UtilisateurService,
    AjoutJeuService
  ]
})
export class CommunModule { }
