import { Component, OnInit } from '@angular/core';
import { ConnexionService } from './connexion.service';
import { Joueur } from '../../dot/utilisateur/joueur';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  pseudo: String;
  password: String;
  joueurConnecte : Joueur;

  constructor(private connexionService : ConnexionService) {
  }

  ngOnInit() {
  }

  connexion() {

    this.connexionService.connexionJoueur(this.pseudo, this.password).subscribe(data => {
      this.joueurConnecte = data;
    });
  }

}
