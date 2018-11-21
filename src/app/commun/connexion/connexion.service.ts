import { Injectable } from '@angular/core';

import {HttpClient, HttpHeaders, HttpClientModule} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

import { Joueur } from '../../dot/utilisateur/joueur';

const httpOptions = {
  headers : new HttpHeaders({
    'Access-Control-Allow-Origin':'*',
    'Content-Type': 'application/json'
  })
};

@Injectable()
export class ConnexionService {
  public joueurConnecteBS: BehaviorSubject<Joueur>;

  urlRestApi = "http://localhost:8181/gaminglab/";

  constructor(private _http: HttpClient) {
    this.joueurConnecteBS=new BehaviorSubject<Joueur>(null);
   }

  private setJoueurConnecteBS(j:Joueur){
   // if(this.joueurConnecteBS)
      this.joueurConnecteBS.next(j);
  //  else
   //   this.joueurConnecteBS=new BehaviorSubject<Joueur>(j);
  }

  connexionJoueur(pseudo: String, password: String): Observable<Joueur> {
    return this._http.post<Joueur>(this.urlRestApi + "connexion/" + pseudo + "/" + password, 
                                   { 
                                     "pseudo": pseudo, 
                                     "password": password
                                    }
                                  )
                      .map(j => { 
                        this.setJoueurConnecteBS(j);
                        return j; 
                      });
  }

  modifierJoueur(idUtilisateur: number, joueur: Joueur) : Observable<Joueur> {
    return this._http.put<Joueur>(this.urlRestApi + "user/" + idUtilisateur, joueur)
    .map(j => {
      this.setJoueurConnecteBS(j);
      return j;
    });
  }

  deconnexion() {
    this.setJoueurConnecteBS(null);
  }

}
