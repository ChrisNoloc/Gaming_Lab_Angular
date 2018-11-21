import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {JeuxComponent} from './jeux.component';
import { JeuComponent } from './jeu/jeu.component';
import { ConnexionComponent } from '../commun/connexion/connexion.component';

const routes: Routes = [
  {
    path: '',
    component: JeuxComponent
  },
  {
    path: 'categorie/:idCategorieJeu',
    component: JeuxComponent
  },
  {
    path: ':idJeu',
    component: JeuComponent
  },
  {
    path: 'connexion',
    loadChildren: "../commun/connexion/connexion.module#ConnexionModule"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JeuxRoutingModule { }
