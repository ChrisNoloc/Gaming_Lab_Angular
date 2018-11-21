import { Joueur } from "./joueur";
import { TypeCarte } from "./type-carte";

export interface JoueurCarte {
    idJoueurCarte: number;
    nomTitulaire: String;
    prenomTitulaire: String;
    numeroCarte: String;
    codeVerification: String;
    dateExpiration: Date;
    joueur: Joueur;
    typeCarte: TypeCarte;
}