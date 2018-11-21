import { Injectable } from '@angular/core';

import {HttpClient, HttpHeaders, HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';

import {Jeu} from '../dot/jeu/jeu';
import { CategorieJeu } from '../dot/jeu/categorie-jeu';
import { CommentaireJeu } from '../dot/jeu/commentaire-jeu';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

const httpOptions = {
  headers : new HttpHeaders({
    'Access-Control-Allow-Origin':'*',
    'Content-Type': 'application/json'
  })
};

@Injectable()
export class JeuxService {

  urlRestApi = "http://localhost:8181/gaminglab/game/";

  constructor(private _http: HttpClient) { }

  // Service pour Catalogue des jeux :

  getAllCategorieJeu() : Observable<CategorieJeu[]> {
    return this._http.get<CategorieJeu[]>(this.urlRestApi + 'categorie');
  }

  getAllJeux() : Observable<Jeu[]> {
    return this._http.get<Jeu[]>(this.urlRestApi + 'jeu');
  }
  
  getAllJeuxByCategorie(idCategorieJeu: number) : Observable<Jeu[]> {
    return this._http.get<Jeu[]>(this.urlRestApi + 'categorie/'+idCategorieJeu+'/jeu');
  }

  // Service pour la page d'un Jeu

  getJeuById(idJeu: number) : Observable<Jeu> {
    return this._http.get<Jeu>(this.urlRestApi + 'jeu/'+idJeu);
  }

  getAllCommentaireJeuByJeu(idJeu: number): Observable<CommentaireJeu[]> {
    return this._http.get<CommentaireJeu[]>(this.urlRestApi + 'jeu/' + idJeu + '/commentaire');
  }

  ajouterCommentaireJeu(commentaireJeu: CommentaireJeu) : Observable<CommentaireJeu> {
    return this._http.post<CommentaireJeu>(this.urlRestApi + 'commentaireJeu', commentaireJeu, httpOptions);

  }

}
