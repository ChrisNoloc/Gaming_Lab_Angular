import { Injectable } from '@angular/core';

import {HttpClient, HttpHeaders, HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';

import { Recherche } from '../../dot/utilitaire/recherche';

const httpOptions = {
  headers : new HttpHeaders({
    'Access-Control-Allow-Origin':'*',
    'Content-Type': 'application/json'
  })
};

@Injectable()
export class RechercheService {

  constructor(private _http: HttpClient) { }

  rechercheTerme(terms: Observable<string>) {
    if (terms != null){
      return terms.debounceTime(100)
      .distinctUntilChanged()
      .switchMap(motsCles => this.recherche(motsCles));
    }
    else {
      return null;
    }
    
  }

  recherche(motsCles : String) : Observable<Recherche>{
    if (motsCles != '') {
      return this._http.get<Recherche>('http://localhost:8181/gaminglab/recherche/'+motsCles);
    }
    else {
      return Observable.of(null);
    }
    
  }
}
