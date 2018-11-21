import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';

import { Commande } from '../../dot/boutique/commande';
import { BoutiqueService } from '../boutique.service';
import { LigneCommande } from '../../dot/boutique/ligne-commande';
import { Joueur } from '../../dot/utilisateur/joueur';
import { ConnexionService } from '../../commun/connexion/connexion.service';
import { EtatCommande } from '../../dot/boutique/etat-commande';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.css']
})
export class CommandeComponent implements OnInit {

  commande: Commande;
  lignesCommande: LigneCommande[];
  joueurCo: Joueur;

  constructor(private boutiqueService: BoutiqueService,
  private connexionService: ConnexionService) {
    
    // Chopper le panier
    
    this.boutiqueService.panierBS.subscribe(c => {
      this.commande = c;
      this.lignesCommande = this.commande.lignesCommande;

      // Calcul du prix total d'une commande en € et en crédit
      
      this.commande.prixTotal = 0;
      this.commande.creditTotal = 0;

      for (var i=0; i< this.lignesCommande.length; i++) {
        this.commande.prixTotal += Number(this.lignesCommande[i].quantite) * Number(this.lignesCommande[i].article.prix);
        this.commande.creditTotal += Number(this.lignesCommande[i].quantite) * Number(this.lignesCommande[i].article.credit);
      }

      // On enregistre la commande
      this.commande.dateEnregistrement = new Date();

      // Qui vient là?
      this.connexionService.joueurConnecteBS.subscribe(j => {
        this.joueurCo = j;
        this.commande.joueur = j;
      });

    });
  }

  ngOnInit() {
  }

  passerCommande() {
    this.boutiqueService.panierBS.next(this.commande);
  }

}
