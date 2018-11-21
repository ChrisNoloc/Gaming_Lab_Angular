import { Component, OnInit } from '@angular/core';

import { Commande } from '../../dot/boutique/commande';
import { Joueur } from '../../dot/utilisateur/joueur';
import { BoutiqueService } from '../boutique.service';
import { ConnexionService } from '../../commun/connexion/connexion.service';
import { EtatCommande } from '../../dot/boutique/etat-commande';

import { Router } from '@angular/router';
import { LigneCommande } from '../../dot/boutique/ligne-commande';

@Component({
  selector: 'app-paiement',
  templateUrl: './paiement.component.html',
  styleUrls: ['./paiement.component.css']
})
export class PaiementComponent implements OnInit {

  commande: Commande;
  joueurCo: Joueur;
  solde: number;
  paiement: number;
  paiementEffectue: boolean = false;
  lignesCommande: LigneCommande[] = [];

  constructor(private boutiqueService: BoutiqueService,
  private connexionService: ConnexionService,
  private router: Router){
    // Commande en cours
    this.boutiqueService.panierBS.subscribe(c => {
      this.commande = c;
    });

    // Joueur connecté
    this.connexionService.joueurConnecteBS.subscribe(j => {
      this.joueurCo = j;
    });

    // Calcul solde après achat
    this.solde = this.joueurCo.credit - this.commande.creditTotal;
  }

  ngOnInit() {
  }

  payerParCredit(commande: Commande) {

    // Etat de commande et Terminee et aPayeCredit
    let etatCommande = new EtatCommande();
    etatCommande.idEtatCommande = 3;
    etatCommande.libelle = "Validée";
    this.commande.etatCommande = etatCommande;
    this.commande.terminee = false;
    this.commande.aPayeCredit = true;
    
    // Ajout de la commande
    this.boutiqueService.ajouterCommande(this.commande).subscribe(data => {
      this.commande = data;
      this.paiement = data.creditTotal;
      this.paiementEffectue = true;
      console.log(this.commande);
      console.log(data);
    });

    // Faire payer le membre
    this.joueurCo.credit = this.solde;
    this.connexionService.modifierJoueur(this.joueurCo.idUtilisateur, this.joueurCo).subscribe(data => {
      this.joueurCo = data;
    });

  }

}
