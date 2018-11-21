import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JeuxRoutingModule } from './jeux-routing.module';
import {JeuxComponent} from './jeux.component';
import {JeuxService} from './jeux.service';

import {FormsModule} from '@angular/forms';
import { JeuComponent } from './jeu/jeu.component';
import { ConnexionModule } from '../commun/connexion/connexion.module';
import { CommunModule } from '../commun/commun.module';

@NgModule({
  imports: [
    CommonModule,
    JeuxRoutingModule,
    FormsModule,
    ConnexionModule,
    CommunModule
  ],
  declarations: [
    JeuxComponent,
    JeuComponent
  ],
  exports: [],
  providers: [
    JeuxService
  ]
})
export class JeuxModule { }
