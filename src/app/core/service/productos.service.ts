import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  
  constructor(private http: HttpClient) { }

  async getProductos(){ 
    const res = await fetch("http://localhost:8080/producto")
    const resjson = (await res).json()
    return resjson
  }


  public post(url:string, body){ 
    return this.http.post(url,body)
  }

 
}
