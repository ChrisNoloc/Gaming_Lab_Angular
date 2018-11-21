import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import {CommunModule} from './commun/commun.module';
import {JeuxModule} from './jeux/jeux.module';

import {HttpClient, HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';
import { RechercheService } from './commun/recherche/recherche.service';
import { ConnexionService } from './commun/connexion/connexion.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommunModule,
    HttpClientModule
  ],
  providers: [
    HttpClient,
    HttpModule,
    RechercheService,
    ConnexionService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
