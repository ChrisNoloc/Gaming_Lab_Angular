import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { AjoutJeuComponent } from './ajout-jeu/ajout-jeu.component';
import { AccueilComponent } from './accueil/accueil.component';

const routes: Routes = [
  {
    path: '',
    component: AccueilComponent,
    loadChildren:'./recherche/recherche.module#RechercheModule'
  },
  {
    path: 'jeux',
    loadChildren: '../jeux/jeux.module#JeuxModule'
  },
  {
    path: 'connexion',
    loadChildren: './connexion/connexion.module#ConnexionModule'
  },
  {
    path: 'boutique',
    loadChildren: '../boutique/boutique.module#BoutiqueModule'
  },
  {
    path: 'tableau-de-bord/:idUtilisateur',
    component: UtilisateurComponent
  },
  {
    path: 'tableau-de-bord/:idUtilisateur/ajout-jeu',
    component: AjoutJeuComponent
  },
  {
    path: 'forum',
    loadChildren: '../forum/forum.module#ForumModule'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommunRoutingModule { }
