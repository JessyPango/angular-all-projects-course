import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListproduitComponent } from './produit/listproduit/listproduit.component';
import { AjoutproduitComponent } from './produit/ajoutproduit/ajoutproduit.component';
import { ModifproduitComponent } from './produit/modifproduit/modifproduit.component';

@NgModule({
  declarations: [
    AppComponent,
    ListproduitComponent,
    AjoutproduitComponent,
    ModifproduitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
