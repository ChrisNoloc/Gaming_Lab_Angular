import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';

import { BoutiqueService } from '../boutique.service';
import { ConnexionService } from '../../commun/connexion/connexion.service';
import { Joueur } from '../../dot/utilisateur/joueur';
import { Commande } from '../../dot/boutique/commande';
import { LigneCommande } from '../../dot/boutique/ligne-commande';

@Component({
  selector: 'app-recap',
  templateUrl: './recap.component.html',
  styleUrls: ['./recap.component.css']
})
export class RecapComponent implements OnInit {

  idCommande: number;
  joueurCo: Joueur;
  commande: Commande;
  lignesCommande: LigneCommande[];

  constructor(
    private boutiqueService: BoutiqueService,
    private _route: ActivatedRoute,
    private connexionService: ConnexionService
  ) {

  this._route.params.subscribe((params: Params) => {

    this.boutiqueService.panierBS.subscribe(data => {
      this.commande = data;
      this.lignesCommande = data.lignesCommande;

        this.connexionService.joueurConnecteBS.subscribe(joueur => {
          this.joueurCo = joueur;
        });
    });
  });
}

  ngOnInit() {
  }

}
