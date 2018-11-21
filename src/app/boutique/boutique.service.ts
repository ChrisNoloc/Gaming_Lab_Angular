import { Injectable } from '@angular/core';

import {HttpClient, HttpHeaders, HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';


import { CategorieArticle } from '../dot/boutique/catagorie-article';
import { Article } from '../dot/boutique/article';
import { LigneCommande } from '../dot/boutique/ligne-commande';
import { Commande } from '../dot/boutique/commande';

const httpOptions = {
  headers : new HttpHeaders({
    'Access-Control-Allow-Origin':'*',
    'Content-Type': 'application/json'
  })
};

@Injectable()
export class BoutiqueService {

  panierCourant: Commande;
  panierBS: BehaviorSubject<Commande>;

  urlRestApi="http://localhost:8181/gaminglab/boutique/";

  constructor(private _http: HttpClient) {
    this.panierCourant = new Commande();
    this.panierCourant.lignesCommande = [];

    this.panierBS = new BehaviorSubject<Commande>(this.panierCourant);
  }

  // CATALOGUE DES ARTICLES

  getAllCategorieArticle(): Observable<CategorieArticle[]> {
    return this._http.get<CategorieArticle[]>(this.urlRestApi + 'categorie');
  }

  getAllArticles() : Observable<Article[]> {
    return this._http.get<Article[]>(this.urlRestApi + 'article')
  }

  getAllArticlesByCategorie(idCategorieArticle: number) : Observable<Article[]> {
    return this._http.get<Article[]>(this.urlRestApi 
      + 'categorie/' + idCategorieArticle + '/article');
  }

  // ARTICLE

  getArticleById(idArticle: number): Observable<Article> {
    return this._http.get<Article>(this.urlRestApi 
      + "article/" + idArticle);
  }

  // PANIER 

  ajouterAuPanier(article: Article, quantite: number) {
    let ligneCommande : LigneCommande = new LigneCommande();
    ligneCommande.article = article;
    ligneCommande.quantite = quantite;

    this.panierCourant.lignesCommande.push(ligneCommande);

    this.setPanierBS();
  }

  private setPanierBS(){
    this.panierBS.next(this.panierCourant);
  }

  getCommandeById(idCommande: number) : Observable<Commande>{
    return this._http.get<Commande>(this.urlRestApi +
    'commande/' + idCommande);
  }

  ajouterCommande(commande: Commande) : Observable<Commande> {
    // NEW

    for (let ligneCommande of commande.lignesCommande) {
     this._http.post<LigneCommande>("http://localhost:8181/gaminglab/panier", JSON.stringify(ligneCommande), httpOptions);
    }

    return this._http.post<Commande>("http://localhost:8181/gaminglab/commande", commande, httpOptions)
                      .map(c => { 
                        this.panierBS.next(c);
                        return c; 
                      });
  }
  
}
