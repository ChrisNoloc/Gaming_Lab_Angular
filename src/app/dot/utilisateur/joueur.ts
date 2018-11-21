import {Civilite} from './civilite';

export class Joueur {
    idUtilisateur: number;
    nom: String;
    prenom: String;
    mail: String;
    pseudo: String;
    password: String;
    dateInscription: Date;
    dateDesinscription: Date;
    civilite: Civilite;
    dateNaissance: Date;
    credit: number;
    imageJoueur: String;
    telephone: String;
    estSuspendu: Boolean;
    dateDebutSuspension: Date;
    dateFinSuspension: Date;
    motif: String;
}
