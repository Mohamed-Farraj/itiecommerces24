import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  categoryUrl = "http://localhost:3000/categories";
  
  ProductsUrl = "http://localhost:3000/products";

  constructor(public http:HttpClient) { }

  // Categories Functions ---------------------------------------------------------

  Get_Categories():Observable<any>{
    return this.http.get<any>(this.categoryUrl);
  }

  Add_Category(category:any):Observable<any>{
    return this.http.post<any>(this.categoryUrl , category);
  }

  get_Category(category_id:any):Observable<any>{
    return this.http.get<any>(`${this.categoryUrl}/${category_id}`);
  }

  edit_Category(category_id:any , category:any):Observable<any>{
    return this.http.patch<any>(`${this.categoryUrl}/${category_id}` , category);
  }

  delete_Category(category_id:any):Observable<any>{
    return this.http.delete<any>(`${this.categoryUrl}/${category_id}`);
  }

  // Products Functions ---------------------------------------------------------

  Get_All_Products():Observable<any>{
    return this.http.get<any>(this.ProductsUrl);
  }

  Add_Product(product:any):Observable<any>{
    return this.http.post<any>(this.ProductsUrl , product);
  }

  get_product(product_id:any):Observable<any>{
    return this.http.get<any>(`${this.ProductsUrl}/${product_id}`);
  }

  edit_product(product_id:any , product:any):Observable<any>{
    return this.http.patch<any>(`${this.ProductsUrl}/${product_id}` , product);
  }

  delete_product(product_id:any):Observable<any>{
    return this.http.delete<any>(`${this.ProductsUrl}/${product_id}`);
  }
}
