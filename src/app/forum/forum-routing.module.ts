import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForumComponent } from './forum.component';
import { SujetComponent } from './sujet/sujet.component';

const routes: Routes = [
  {
    path: '',
    component: ForumComponent
  },
  {
    path: 'categorie/:idCategorie',
    component: ForumComponent
  },
  {
    path: 'sujet/:idSujet',
    component: SujetComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForumRoutingModule { }
