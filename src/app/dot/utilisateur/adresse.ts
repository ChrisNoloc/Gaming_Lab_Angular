import { Joueur } from "./joueur";
import { VilleCodePostal } from "./ville-code-postal";

export interface Adresse {
    idAdresse: number;
    numero: number;
    voie: String;
    libelle: String;
    prenomDestinataire: String;
    nomDestinataire: String;
    joueur: Joueur;
    villeCodePostal: VilleCodePostal;
}