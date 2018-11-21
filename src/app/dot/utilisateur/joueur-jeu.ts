import { Jeu } from "../jeu/jeu";
import { Joueur } from "./joueur";

export class JoueurJeu{
    idJoueurjeu : number;
    score : number;
    tempsJeu : Date;
    dateJouer : Date;
    jeu : Jeu;
    joueur : Joueur;
}