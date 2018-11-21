import { Joueur } from "../utilisateur/joueur";

export interface CommentaireForum {
    idCommentaire: number;
    contenu: String;
    dateEmission: Date;
    note: number;
    commentairesInf: CommentaireForum[];
    joueur: Joueur;
}