import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForumRoutingModule } from './forum-routing.module';
import { ForumComponent } from './forum.component';
import { ForumService } from './forum.service';
import { SujetComponent } from './sujet/sujet.component';

@NgModule({
  imports: [
    CommonModule,
    ForumRoutingModule
  ],
  declarations: [
    ForumComponent, 
    SujetComponent
  ],
  providers: [
    ForumService
  ]
})
export class ForumModule { }
