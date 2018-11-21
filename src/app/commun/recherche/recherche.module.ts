import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RechercheRoutingModule } from './recherche-routing.module';
import { RechercheService} from './recherche.service';

import {HeaderComponent} from '../header/header.component';
import { RechercheComponent } from './recherche.component';

@NgModule({
  imports: [
    CommonModule,
    RechercheRoutingModule
  ],
  declarations: [
    
  ],
  exports: [
    
  ],
  providers: [
    RechercheService
  ]
})
export class RechercheModule { }
