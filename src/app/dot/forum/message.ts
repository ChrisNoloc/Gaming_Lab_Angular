import { Joueur } from "../utilisateur/joueur";

export class Message {
    idMessage: number;
    libelle: number;
    contenu: String;
    estLu: Boolean;
    dateEmission: Date;
    joueurEmetteur: Joueur;
    joueurDestinataire: Joueur;
}
