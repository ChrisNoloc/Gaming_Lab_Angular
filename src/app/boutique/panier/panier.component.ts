import { Component, OnInit } from '@angular/core';
import { Commande } from '../../dot/boutique/commande';
import { BoutiqueService } from '../boutique.service';
import { Router } from '@angular/router';
import { LigneCommande } from '../../dot/boutique/ligne-commande';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {

  panier: Commande;
  lignesCommande: LigneCommande[];

  constructor(private boutiqueService: BoutiqueService,
  private router: Router) {
    
    this.boutiqueService.panierBS.subscribe(p => {
      this.panier = p;
    });
    
  }

  ngOnInit() {
  }

  navigateToCommande(){
    this.router.navigate(['boutique/commande']);
  }

  ajouterAuPanier(ligneCommande: LigneCommande){
    this.lignesCommande.push(ligneCommande);
  }

}
