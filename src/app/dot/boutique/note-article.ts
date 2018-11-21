import {Joueur} from '../utilisateur/joueur';

export interface NoteArticle {
    idNoteArticle: number;
    note: number;
    dateNote: Date;
    contenu: String;
    joueur: Joueur;
}