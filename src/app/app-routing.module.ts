import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LivreComponent } from './livre/livre.component';
import { AboutComponent } from './modules/general/about/about.component';
import { ContactComponent } from './modules/general/contact/contact.component';
import { HomeComponent } from './modules/general/home/home.component';
import { NotFoundComponent } from './modules/general/not-found/not-found.component';
import { ProduitComponent } from './modules/general/produit/produit.component';
import { SigninComponent } from './modules/general/signin/signin.component';
import { RetourLivreComponent } from './retour-livre/retour-livre.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'about', component: AboutComponent},
  { path: 'signin', component: SigninComponent},
  { path: 'produits', component: ProduitComponent},
  { path: 'livres', component: LivreComponent},
  { path: 'livre/:id', component: RetourLivreComponent},
  { path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
