import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';

import { ConnexionService } from '../connexion/connexion.service';
import { Joueur } from '../../dot/utilisateur/joueur';
import { UtilisateurService } from './utilisateur.service';
import { JoueurBadge } from '../../dot/utilisateur/joueur-badge';
import { Commande } from '../../dot/boutique/commande';
import { JoueurJeu } from '../../dot/utilisateur/joueur-jeu';
import { Jeu } from '../../dot/jeu/jeu';
import { LigneCommande } from '../../dot/boutique/ligne-commande';

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.css']
})
export class UtilisateurComponent implements OnInit {
  idUtilisateur: number;
  joueur: Joueur;
  joueurBadge : Array<JoueurBadge>;
  commande : Array<Commande>;
  joueurJeu : Array<JoueurJeu>;
  jeux : Array<Jeu>;
  lignesCommande: LigneCommande[];

  constructor(private serviceUtilisateur: UtilisateurService,
              private connexionService: ConnexionService,
              private _route: ActivatedRoute) { 
    this._route.params.subscribe((params: Params) => {

      if (params["idUtilisateur"] != undefined) {
        this.idUtilisateur = Number(params["idUtilisateur"]);

        this.serviceUtilisateur.getUtilisateurById(this.idUtilisateur)
        .subscribe( j => {
          this.joueur=j;
        } ,
        e => console.log(e) );

        this.serviceUtilisateur.getJoueurBadgeByJoueur(this.idUtilisateur)
        .subscribe( jb => this.joueurBadge=jb,
            e => console.log(e) );

        this.serviceUtilisateur.getCommandeByJoueur(this.idUtilisateur)
        .subscribe(cmd => {
          this.commande=cmd;
          console.log(cmd);
        }, e => console.log(e));

        this.serviceUtilisateur.getJoueurJeuByJoueur(this.idUtilisateur)
        .subscribe( jj => {this.joueurJeu=jj; console.log(jj);},
          
            e => console.log(e) );

        this.serviceUtilisateur.getJeuByJoueur(this.idUtilisateur)
        .subscribe( je => this.jeux = je,
            e => console.log(e) );
      }
    });
  }

  ngOnInit() {
  }

  deconnexion() {
    this.connexionService.deconnexion();
  }

}
