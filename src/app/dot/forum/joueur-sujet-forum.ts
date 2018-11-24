import { Joueur } from "../utilisateur/joueur";
import { SujetForum } from "./sujet-forum";

export class JoueurSujetForum {
    idJoueurSujet: number;
    dateNote: Date;
    vote: number;
    idJoueur: number;
    sujetForum: SujetForum;
}
