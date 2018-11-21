import { Joueur } from "../utilisateur/joueur";
import { SujetForum } from "./sujet-forum";

export class JoueurSujetForum {
    idJoueurSujet: number;
    dateNote: Date;
    joueur: Joueur;
    sujetForum: SujetForum;
}
