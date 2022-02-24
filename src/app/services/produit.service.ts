import { Injectable } from '@angular/core';
import { Produit } from '../shared/produit';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  constructor() { }

  listProduit(){}
  getProduit(id:string) {}
  addProduit(prod:Produit) {}
  updateProduit(id:any, prod: any){}
  deleteProduit(id:string){}
  
}
