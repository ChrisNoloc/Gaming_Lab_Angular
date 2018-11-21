import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';

import { CategorieArticle } from '../dot/boutique/catagorie-article';
import { BoutiqueService } from './boutique.service';
import { Article } from '../dot/boutique/article';

@Component({
  selector: 'app-boutique',
  templateUrl: './boutique.component.html',
  styleUrls: ['./boutique.component.css']
})
export class BoutiqueComponent implements OnInit {

  categoriesArticle: CategorieArticle[];
  idCategorieArticle: number;
  articles: Article[];

  constructor(
    private boutiqueService: BoutiqueService,
    private _route: ActivatedRoute) {
      
      this.boutiqueService.getAllCategorieArticle().subscribe(data => {
        this.categoriesArticle = data;
      });

      this._route.params.subscribe((params: Params) => {
        if (params['idCategorieArticle'] != undefined) {
          this.idCategorieArticle = Number(params['idCategorieArticle']);
          this.boutiqueService.getAllArticlesByCategorie(this.idCategorieArticle).subscribe(data => {
            this.articles = data;
          });
        }
        else {
          this.boutiqueService.getAllArticles().subscribe(data => {
            this.articles = data;
          });
        }
      });

  }

  ngOnInit() {
  }

  getAllArticlesByCategorie(idCategorieArticle: number) {
    this.boutiqueService.getAllArticlesByCategorie(this.idCategorieArticle).subscribe(data => {
      this.articles = data;
    });
  }

}
