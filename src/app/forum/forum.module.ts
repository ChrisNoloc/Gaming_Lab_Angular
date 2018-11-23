import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForumRoutingModule } from './forum-routing.module';
import { ForumComponent } from './forum.component';
import { ForumService } from './forum.service';
import { SujetComponent } from './sujet/sujet.component';
import { VoteSujetComponent } from './vote-sujet/vote-sujet.component';
import { CommentaireComponent } from './commentaire/commentaire.component';
import { VoteCommentaireComponent } from './vote-commentaire/vote-commentaire.component';
import { ReponseSujetComponent } from './reponse-sujet/reponse-sujet.component';
import { ReponseCommentaireComponent } from './reponse-commentaire/reponse-commentaire.component';

@NgModule({
  imports: [
    CommonModule,
    ForumRoutingModule
  ],
  declarations: [
    ForumComponent, 
    SujetComponent, 
    VoteSujetComponent, 
    CommentaireComponent, 
    VoteCommentaireComponent, 
    ReponseSujetComponent, 
    ReponseCommentaireComponent
  ],
  providers: [
    ForumService
  ]
})
export class ForumModule { }
