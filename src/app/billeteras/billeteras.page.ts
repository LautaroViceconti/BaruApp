import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { ProductosService } from '../core/service/productos.service';

@Component({
  selector: 'app-billeteras',
  templateUrl: './billeteras.page.html',
  styleUrls: ['./billeteras.page.scss'],
})
export class BilleterasPage implements OnInit {

  constructor(private menuCtrl:MenuController, private productoService: ProductosService, productosService:ProductosService) {}

  productos = []
  billetera = []

  ngOnInit() {
    this.getProductos()
  }

  async getProductos(){
    this.productos = await this.productoService.getProductos()
     console.table(this.productos)
     this.billetera = this.getBilletera("Billetera");
    }

    getBilletera(categoria : string){ 
      return this.productos.filter((Producto)=>Producto.categoria === categoria)
    }
}