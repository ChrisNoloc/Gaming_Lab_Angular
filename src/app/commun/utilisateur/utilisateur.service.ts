import { Injectable } from '@angular/core';

import {HttpClient, HttpHeaders, HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import { Joueur } from '../../dot/utilisateur/joueur';
import { JoueurBadge } from '../../dot/utilisateur/joueur-badge';
import { Commande } from '../../dot/boutique/commande';
import { Jeu } from '../../dot/jeu/jeu';
import { JoueurJeu } from '../../dot/utilisateur/joueur-jeu';

const httpOptions = {
  headers : new HttpHeaders({
    'Access-Control-Allow-Origin':'*',
    'Content-Type': 'application/json'
  })
};

@Injectable()
export class UtilisateurService {

  constructor(private http: HttpClient) { }

  public getUtilisateurById(id : number):Observable<Joueur>{
    return this.http.get<Joueur>("http://localhost:8181/gaminglab/user/"+id);
  }

  public getJoueurBadgeByJoueur(id : number):Observable<JoueurBadge[]>{
    return this.http.get<JoueurBadge[]>("http://localhost:8181/gaminglab/profil/"+id+"/badge");
    }

  public getCommandeByJoueur(id : number):Observable<Commande[]>{
    return this.http.get<Commande[]>("http://localhost:8181/gaminglab/profil/"+id+"/commande");
  }

  public getJoueurJeuByJoueur(id: number):Observable<JoueurJeu[]>{
    return this.http.get<JoueurJeu[]>("http://localhost:8181/gaminglab/profil/"+id+"/jeuJoue");
  }

  public getJeuByJoueur(id: number):Observable<Jeu[]>{
    return this.http.get<Jeu[]>("http://localhost:8181/gaminglab/profil/"+id+"/jeuAjout");
  }

}
