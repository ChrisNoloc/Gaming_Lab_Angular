import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';

import { ConnexionRoutingModule } from './connexion-routing.module';
import { ConnexionComponent } from './connexion.component';
import {ConnexionService} from './connexion.service';

@NgModule({
  imports: [
    CommonModule,
    ConnexionRoutingModule,
    FormsModule
  ],
  declarations: [
  ],
  providers: [

  ],
  exports: [
  ]
})
export class ConnexionModule { }
