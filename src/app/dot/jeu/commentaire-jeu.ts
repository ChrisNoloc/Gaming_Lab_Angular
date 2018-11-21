import { Jeu } from "./jeu";
import { Joueur } from "../utilisateur/joueur";

export class CommentaireJeu {
    idCommentaireJeu: number;
    contenu: String;
    dateEmission: Date;
    jeu: Jeu;
    joueur: Joueur;
    commentaireSup: CommentaireJeu;
}