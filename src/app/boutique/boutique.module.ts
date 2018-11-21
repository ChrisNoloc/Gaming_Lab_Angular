import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { BoutiqueComponent } from './boutique.component';
import { BoutiqueService } from './boutique.service';
import { ArticleComponent } from './article/article.component';
import { BoutiqueRoutingModule } from './boutique-routing.module';
import { PanierComponent } from './panier/panier.component';
import { CommandeComponent } from './commande/commande.component';
import { PaiementComponent } from './paiement/paiement.component';
import { RecapComponent } from './recap/recap.component';

@NgModule({
  imports: [
    CommonModule,
    BoutiqueRoutingModule,
    FormsModule
  ],
  declarations: [
    BoutiqueComponent,
    ArticleComponent,
    PanierComponent,
    CommandeComponent,
    PaiementComponent,
    RecapComponent,
    PanierComponent
  ],
  providers: [
    BoutiqueService
  ],
  exports: [
    PanierComponent
  ]
})
export class BoutiqueModule { }
