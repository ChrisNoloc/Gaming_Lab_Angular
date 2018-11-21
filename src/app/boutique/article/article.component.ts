import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';

import { CategorieArticle } from '../../dot/boutique/catagorie-article';
import { Article } from '../../dot/boutique/article';
import { LigneCommande } from '../../dot/boutique/ligne-commande';
import { Commande } from '../../dot/boutique/commande';
import { BoutiqueService } from '../boutique.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  article: Article;
  quantite: number;
  ligneCommande : LigneCommande;
  commande: Commande;

  constructor(private boutiqueService: BoutiqueService,
              private _route: ActivatedRoute) {

    // Récupérer l'article à partir du paramètre URL

    this._route.params.subscribe((params: Params) => {
      
      if (params["idArticle"] != undefined) {

        let idArticle = Number(params["idArticle"]);

        this.boutiqueService.getArticleById(idArticle).subscribe(data => {
          this.article = data;
        });
      }
    });

    this.quantite = 1;
  }

  ngOnInit() {
  }

  augmenterQte() {
    this.quantite++;
  }

  diminuerQte() {
    this.quantite--;
 }
  ajouterAuPanier() {
    this.boutiqueService.ajouterAuPanier(this.article, this.quantite);
  }
}
