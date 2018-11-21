import {JeuTag} from './jeu-tag';
import { Joueur } from '../utilisateur/joueur';
import { CategorieJeu } from './categorie-jeu';

export class Jeu {
    idJeu: number;
    libelle: String;
    description: String;
    creditPlus: number;
    dateAjout: Date;
    dateRefus: Date;
    dateDemande: Date;
    motifRefus: String;
    imageJeu: String;
    estCompatibleMobile: Boolean;
    lien: String;
    nbPartie: number;
    joueur: Joueur;
    jeuTags: JeuTag[];
    categorieJeu: CategorieJeu;
}
