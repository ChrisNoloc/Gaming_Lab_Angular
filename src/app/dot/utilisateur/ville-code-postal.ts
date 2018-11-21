import { CodePostal } from "./code-postal";
import { Ville } from "./ville";

export interface VilleCodePostal {
    idVilleCodePostal: number;
    codePostal: CodePostal;
    ville: Ville;
}