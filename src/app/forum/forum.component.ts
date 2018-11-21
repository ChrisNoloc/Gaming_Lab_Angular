import { Component, OnInit } from '@angular/core';
import { SujetForum } from '../dot/forum/sujet-forum';
import { CategorieForum } from '../dot/forum/categorie-forum';
import { Joueur } from '../dot/utilisateur/joueur';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {

  sujetsForum : SujetForum[];
  categoriesForum: CategorieForum[];
  idCategorieForum: number;
  sujets: SujetForum[];
  joueurCo: Joueur;

  constructor() { 
    this.sujetsForum = new Array<SujetForum>();
  }

  ngOnInit() {
    for (let i = 0; i<20; i++) {
      let sujet = new SujetForum();
      sujet.libelle = 'Sujet ' + i;
      sujet.descriptif = "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.";
      sujet.note = i;
      this.sujetsForum.push(sujet);
    }
  }

}
