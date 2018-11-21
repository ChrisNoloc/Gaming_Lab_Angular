import { Joueur } from "../utilisateur/joueur";
import { Jeu } from "../jeu/jeu";
import {CommentaireForum} from "./commentaire-forum";

export interface SujetForum {
    idSujet: number;
    libelle: String;
    dateCreation: Date;
    note: number;
    commentairesForum : CommentaireForum[];
    jeu: Jeu;
    joueur: Joueur;
}