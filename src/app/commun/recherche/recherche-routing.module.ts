import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Modules pour les web services :
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RechercheRoutingModule { }
