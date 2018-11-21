import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Joueur } from '../../dot/utilisateur/joueur';
import { CategorieJeu } from '../../dot/jeu/categorie-jeu';
import { Jeu } from '../../dot/jeu/jeu';

@Injectable()
export class AjoutJeuService {
  constructor(private http : HttpClient) { }

  public pushFileToStorage(file : File): Observable<HttpEvent<{}>>{
    const formdataFile: FormData = new FormData();
    formdataFile.append('file', file);
    const reqFile = new HttpRequest('POST', 'http://localhost:8181/gaminglab/file', formdataFile, {
      reportProgress: true,
      responseType: 'text'
    });
    return this.http.request(reqFile);
  }

  public pushImageToStorage(image : File): Observable<HttpEvent<{}>>{
    const formdataImage: FormData = new FormData();
    formdataImage.append('image', image);
    const reqImage = new HttpRequest('POST', 'http://localhost:8181/gaminglab/image', formdataImage, {
      reportProgress: true,
      responseType: 'text'
    });
    return this.http.request(reqImage);
  }

  // public importerImageAsset(image: File) {
  //   this.http.get('http://localhost:8181/gaminglab/file/', image);
  // }

  public postJeu(jeu: Jeu){
    return this.http.post('http://localhost:8181/gaminglab/game/ajoutJeu', jeu);
  }

  public getFiles(): Observable<any>{
    return this.http.get('http://localhost:8181/gaminglab/file');
  }

  public getAllCategorieJeu():Observable<Array<CategorieJeu>>{
    return this.http.get<Array<CategorieJeu>>("http://localhost:8181/gaminglab/game/categorie");
  }

  public modifierCreditJoueur(joueur: Joueur):Observable<Joueur>{
    return this.http.put<Joueur>("http://localhost:8181/gaminglab/user/"+joueur.idUtilisateur,joueur);
  }

}
