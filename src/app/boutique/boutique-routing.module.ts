import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BoutiqueComponent } from './boutique.component';
import { ArticleComponent } from './article/article.component';
import { PanierComponent } from './panier/panier.component';
import { CommandeComponent } from './commande/commande.component';
import { PaiementComponent } from './paiement/paiement.component';
import { RecapComponent } from './recap/recap.component';

const routes: Routes = [
    {
        path:'',
        component: BoutiqueComponent
    },
    {
        path:'categorie/:idCategorieArticle',
        component: BoutiqueComponent
    },
    {
        path:'article/:idArticle',
        component: ArticleComponent
    },
    {
        path: 'panier',
        component: PanierComponent
    },
    {
        path: 'commande',
        component: CommandeComponent
    },
    {
        path: 'paiement',
        component: PaiementComponent
    },
    {
        path:'recap',
        component: RecapComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BoutiqueRoutingModule { }