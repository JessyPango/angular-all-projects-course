import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './modules/general/home/home.component';
import { ContactComponent } from './modules/general/contact/contact.component';
import { AboutComponent } from './modules/general/about/about.component';
import { SigninComponent } from './modules/general/signin/signin.component';
import { NotFoundComponent } from './modules/general/not-found/not-found.component';
import { ProduitComponent } from './modules/general/produit/produit.component';
import { FormsModule } from '@angular/forms';
import { LivreComponent } from './livre/livre.component';
import { RetourLivreComponent } from './retour-livre/retour-livre.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    SigninComponent,
    NotFoundComponent,
    ProduitComponent,
    LivreComponent,
    RetourLivreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
