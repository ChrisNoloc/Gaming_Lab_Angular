import {NoteArticle} from './note-article';
import {ImageArticle} from './image-article';
import { CategorieArticle } from './catagorie-article';

export interface Article {
    idArticle: number;
    libelle: String;
    description: String;
    imageArticle: String;
    prix: number;
    credit: number;
    quantiteDispo: number;
    moyenneNote: number;
    categorieArticle: CategorieArticle;
    notesArticles: NoteArticle[];
    imagesArticle: ImageArticle[];
}