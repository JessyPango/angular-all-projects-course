import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Produit } from '../shared/produit';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  baseurl = environment.host
  constructor(private http: HttpClient) { }

  ListProduit(): Observable<Produit[]> {
    return this.http.get<Produit[]>(this.baseurl);
  }
  AddProduit(prod: Produit): Observable<Produit> { return this.http.post<Produit>(this.baseurl, prod) }
  UpdateProduit(id: String, prod: any): Observable<Produit> { return this.http.put<Produit>(this.baseurl + '/' + id, prod) }
  DeleteProduit(id: string): Observable<Produit> { return this.http.delete<Produit>(this.baseurl + '/' + id) }
  GetProduit(id:string): Observable<Produit>{ return this.http.get<Produit>(this.baseurl)}
}
