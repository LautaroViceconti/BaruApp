import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor() { }

  async getProductos(){ 
    const res = await fetch("http://localhost:8080/producto")
    const resjson = (await res).json()
    return resjson
  }
}
