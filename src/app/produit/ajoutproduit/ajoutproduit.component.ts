import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProduitService } from 'src/app/services/produit.service';
import { Produit } from 'src/app/shared/produit';

@Component({
  selector: 'app-ajoutproduit',
  templateUrl: './ajoutproduit.component.html',
  styleUrls: ['./ajoutproduit.component.css']
})
export class AjoutproduitComponent implements OnInit {

  constructor(private prodserv: ProduitService, private router: Router) { }

  produit: Produit = new Produit();

  ngOnInit(): void {
  }

  ajoutproduit() {
    this.prodserv.AddProduit(this.produit).
      subscribe(data => this.router.navigate(['/listproduits']));
  }

}
