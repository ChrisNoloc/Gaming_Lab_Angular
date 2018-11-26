import { SujetForum } from "./sujet-forum";
import { Joueur } from "../utilisateur/joueur";

export class CommentaireForum {
    idCommentaire: number;
    contenu: String;
    dateEmission: Date;
    note: number;
    sujetForum: SujetForum;
    idCommentaireSup: number;
    joueur: Joueur;
}
