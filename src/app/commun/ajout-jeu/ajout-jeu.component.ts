import { Component, OnInit } from '@angular/core';
import { AjoutJeuService } from './ajout-jeu.service';
import { HttpClient, HttpEventType, HttpResponse } from '@angular/common/http';
import { Jeu } from '../../dot/jeu/jeu';
import { CategorieJeu } from '../../dot/jeu/categorie-jeu';
import { Joueur } from '../../dot/utilisateur/joueur';
import { ConnexionService } from '../connexion/connexion.service';

@Component({
  selector: 'app-ajout-jeu',
  templateUrl: './ajout-jeu.component.html',
  styleUrls: ['./ajout-jeu.component.css']
})
export class AjoutJeuComponent implements OnInit {

  selectedFiles: FileList;
  imageFiles: FileList;
  currentFileUpload: File;
  currentImageUpload: File;
  progress: { percentage: number } = { percentage: 0 };
  jeu = new Jeu;
  categorieSelected = new CategorieJeu;
  categoriesJeu : Array<CategorieJeu>;
  urlJeu : string;
  fichierPresent: boolean = false;
  imagePresente: boolean = false;

  joueurCo : Joueur;

  constructor(private uploadService: AjoutJeuService,
  private connexionService: ConnexionService) { 
    // Joueur connecté
    this.connexionService.joueurConnecteBS.subscribe(j => {
      this.joueurCo = j;
    });
  }

  ngOnInit() {
    this.uploadService.getAllCategorieJeu()
    .subscribe( cat => this.categoriesJeu = cat,
        e => console.log(e) )
  }

  selectFile(event) {
    const file = event.target.files.item(0);
    this.selectedFiles = event.target.files;
    this.fichierPresent = true;
  }

  selectImage(event) {
    const img = event.target.files.item(0);
    this.imageFiles = event.target.files;
    this.imagePresente = true;
  }

  upload() {
    this.progress.percentage = 0;
    this.currentFileUpload = this.selectedFiles.item(0);
    this.currentImageUpload = this.imageFiles.item(0);

    // Ajout du jeu
    this.jeu.nbPartie = 0;
    this.jeu.estCompatibleMobile = false;
    this.jeu.categorieJeu = this.categorieSelected;
    this.jeu.imageJeu = this.currentImageUpload.name;
    this.jeu.lien = this.currentFileUpload.name.slice(0, -4);
    this.jeu.joueur = this.joueurCo;
    this.uploadService.postJeu(this.jeu).subscribe();
    // Rajouter "this.jeu.joueur = joueurConnected"

    // Envoie du dossier du jeu
    this.uploadService.pushFileToStorage(this.currentFileUpload).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        this.progress.percentage = Math.round(100 * event.loaded / event.total);
      } else if (event instanceof HttpResponse) {
        console.log('File is completely uploaded!');
      }
    });

    // Envoie de l'image du jeu
    this.uploadService.pushImageToStorage(this.currentImageUpload).subscribe(event => {
      if (event instanceof HttpResponse) {
        console.log('Image is completely uploaded!');
      }
    });

    // Modification crédit du joueur

    this.joueurCo.credit += 100;
    
    this.uploadService.modifierCreditJoueur(this.joueurCo).subscribe(jo => this.joueurCo = jo, e => console.log(e));

    this.connexionService.joueurConnecteBS.next(this.joueurCo);
    
    this.selectedFiles = undefined;
    this.imageFiles = undefined;
    this.fichierPresent = false;
    this.imagePresente = false;
  }

}
