import { Joueur } from "../utilisateur/joueur";
import { LigneCommande } from "./ligne-commande";
import { JoueurCarte } from "../utilisateur/joueur-carte";
import { Adresse } from "../utilisateur/adresse";
import { EtatCommande } from "./etat-commande";

export class Commande {
    idCommande: number;
    idSession: number;
    dateEnregistrement: Date;
    dateAnnulation: Date;
    dateLivraison: Date;
    joueurCarte: JoueurCarte;
    lignesCommande: LigneCommande[];
    joueur: Joueur;
    adresse: Adresse;
    etatCommande: EtatCommande;
    terminee: Boolean;
    aPayeCredit: Boolean;
    prixTotal: number;
    creditTotal: number;
}