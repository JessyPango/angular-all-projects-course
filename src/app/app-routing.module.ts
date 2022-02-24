import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjoutproduitComponent } from './produit/ajoutproduit/ajoutproduit.component';
import { ListproduitComponent } from './produit/listproduit/listproduit.component';
import { ModifproduitComponent } from './produit/modifproduit/modifproduit.component';

const routes: Routes = [
  { path: 'listproduits', component: ListproduitComponent},
  { path: 'ajoutproduit', component: AjoutproduitComponent},
  { path: 'editproduit/:_id', component: ModifproduitComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
