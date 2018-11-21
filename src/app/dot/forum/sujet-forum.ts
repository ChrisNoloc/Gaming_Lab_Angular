import { CategorieForum } from "./categorie-forum";
import { Joueur } from "../utilisateur/joueur";

export class SujetForum {
    idSujet: number;
    libelle: String;
    descriptif: String;
    dateCreation: Date;
    note: number;
    categorieForum: CategorieForum;
    joueur: Joueur;
}