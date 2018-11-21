import {Jeu} from '../jeu/jeu';
import {Joueur} from '../utilisateur/joueur';
import {Article} from '../boutique/article';
import {SujetForum} from '../communication/sujet-forum';

export interface Recherche {
    joueurs: Joueur[];
    jeux: Jeu[];
    articles: Article[];
    sujetForums: SujetForum[];
}
