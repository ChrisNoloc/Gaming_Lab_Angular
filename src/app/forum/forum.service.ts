import { Injectable } from '@angular/core';

import {HttpClient, HttpHeaders, HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';
import { CategorieForum } from '../dot/forum/categorie-forum';
import { SujetForum } from '../dot/forum/sujet-forum';
import { CommentaireForum } from '../dot/forum/commentaire-forum';
import { Joueur } from '../dot/utilisateur/joueur';
import { JoueurSujetForum } from '../dot/forum/joueur-sujet-forum';

const httpOptions = {
  headers : new HttpHeaders({
    'Access-Control-Allow-Origin':'*',
    'Content-Type': 'application/json'
  })
};

@Injectable()
export class ForumService {

  urlRestApi = "http://localhost:8182/gaminglab/forum";

  constructor(private _http: HttpClient) { }

  getAllCategorieForum() : Observable<CategorieForum[]> {
    return this._http.get<CategorieForum[]>(this.urlRestApi + '/categorie');
  }

  getCategorieForumById(idCategorieForum : number) : Observable<CategorieForum> {
    return this._http.get<CategorieForum>(this.urlRestApi + '/categorie/' + idCategorieForum);
  }

  getAllSujet() : Observable<SujetForum[]> {
    return this._http.get<SujetForum[]>(this.urlRestApi + "/sujets");
  }

  getAllSujetByCategorieForum(idCategorieForum : number) : Observable<SujetForum[]> {
    return this._http.get<SujetForum[]>(this.urlRestApi + '/categorie/' + idCategorieForum + '/sujet');
  }

  getSujetById(idSujet : number) : Observable<SujetForum> {
    return this._http.get<SujetForum>(this.urlRestApi + '/sujet/' + idSujet);
  }

  getAllCommentaireForumBySujet(idSujetForum: number) : Observable<CommentaireForum[]> {
    return this._http.get<CommentaireForum[]>(this.urlRestApi + "/sujet/" + idSujetForum + "/commentaire");
  }

  getCommentaireForumById(idCommentaire : number) : Observable<CommentaireForum> {
    return this._http.get<CommentaireForum>(this.urlRestApi + "/commentaire/" + idCommentaire );
  }

  ajouterCommentaire(commentaire : CommentaireForum) : Observable<CommentaireForum> {
    return this._http.post<CommentaireForum>(this.urlRestApi + "/commentaire", commentaire, httpOptions);
  }

  // noterSujet(idSujetForum: number, sujetForum: SujetForum, idJoueur: number) : Observable<SujetForum> {
  //   return this._http.put<SujetForum>(this.urlRestApi + "/sujet/" + idSujetForum + "/"+ idJoueur, sujetForum, httpOptions);
  // }

  noterCommentaire(idSujetForum : number, commentaireForum: CommentaireForum, idJoueur: number) : Observable<CommentaireForum> {
    return this._http.put<CommentaireForum>(this.urlRestApi + "/commentaire/" + idSujetForum + "/" + idJoueur, commentaireForum, httpOptions);
  }

  //TODO sur controller web service java
  // getAllJoueurSujetForumByJoueur (idUtilisateur: number) : Observable<JoueurSujetForum[]> {
  //   return this._http.get<JoueurSujetForum[]>(this.urlRestApi + "/joueursujetforum/" + idUtilisateur);
  // }

  getJoueurSujetForumByIdJoueurSujet(idUtilisateur: number, idSujet: number) : Observable<JoueurSujetForum> {
    return this._http.get<JoueurSujetForum>(this.urlRestApi + "/joueursujetforum/" + idUtilisateur + "/" + idSujet);
  }

  insertJoueurSujetForum(joueurSujetForum : JoueurSujetForum) : Observable<JoueurSujetForum> {
    return this._http.post<JoueurSujetForum>(this.urlRestApi + "/joueursujetforum", joueurSujetForum, httpOptions);
  }

  updateJoueurSujetForum(joueurSujetForum : JoueurSujetForum) : Observable<JoueurSujetForum> {
    return this._http.put<JoueurSujetForum>(this.urlRestApi + "/joueursujetforum", joueurSujetForum, httpOptions);
  }


}
