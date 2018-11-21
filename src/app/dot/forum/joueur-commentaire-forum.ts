import { Joueur } from "../utilisateur/joueur";
import { CommentaireForum } from "./commentaire-forum";

export class JoueurCommentaireForum {
    idJoueurCommentaire: number;
    dateNote: Date;
    joueur: Joueur;
    commentaireForum: CommentaireForum;
}
