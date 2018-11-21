import { Joueur } from "./joueur";
import { Badge } from "./badge";

export class JoueurBadge{
    idJoueurBadge : number;
    compteur : number;
    dateDebloque : Date;
    badge : Badge;
    joueur : Joueur;
}