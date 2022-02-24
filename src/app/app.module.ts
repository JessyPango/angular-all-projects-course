import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactsComponent
  ], //  classes représentant le module. 
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ], // Pour importer d'autre modules
  providers: [], // Pour déclarer les fabriques de services
  bootstrap: [AppComponent] // Pour declarer le composant Racine du module
})
export class AppModule { }
