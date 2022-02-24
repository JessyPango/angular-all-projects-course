import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProduitService } from 'src/app/services/produit.service';
import { Produit } from 'src/app/shared/produit';

@Component({
  selector: 'app-modifproduit',
  templateUrl: './modifproduit.component.html',
  styleUrls: ['./modifproduit.component.css']
})
export class ModifproduitComponent implements OnInit {

  constructor(private prodserv: ProduitService, private route:ActivatedRoute ,private router: Router) { }

  produit: Produit = new Produit();
  id:any;

  ngOnInit(): void {
    this.produit = new Produit;
    this.id=this.route.snapshot.params['_id'];
    this.prodserv.GetProduit(this.id).subscribe(data=>this.produit=data);
  }

  modifierprod(){
    this.prodserv.UpdateProduit(this.id,this.produit).subscribe(data=>this.router.navigate([ '/listproduits']));
  }
}
