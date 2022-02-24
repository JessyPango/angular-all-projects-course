import { Component, OnInit } from '@angular/core';
import { ProduitService } from 'src/app/services/produit.service';
import { Produit } from 'src/app/shared/produit';

@Component({
  selector: 'app-listproduit',
  templateUrl: './listproduit.component.html',
  styleUrls: ['./listproduit.component.css']
})
export class ListproduitComponent implements OnInit {

  produits:Produit[] | undefined;

  constructor(private prodserv:ProduitService) { }

  ngOnInit(): void {
    this.loadproduits();
  }

  loadproduits() {
    return this.prodserv.ListProduit().subscribe(
      data => this.produits = data
    ), (err: any) => console.log(err) 
  }
  Deleteproduit(id: any){
    return this.prodserv.DeleteProduit(id).subscribe(
      data=>{this.loadproduits()}
    );
  }

}
