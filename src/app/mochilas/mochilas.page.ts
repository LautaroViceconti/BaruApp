import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { ProductosService } from '../core/service/productos.service';

@Component({
  selector: 'app-mochilas',
  templateUrl: './mochilas.page.html',
  styleUrls: ['./mochilas.page.scss'],
})
export class MochilasPage implements OnInit {

  constructor(private menuCtrl:MenuController, private productoService: ProductosService, productosService:ProductosService) {}

  productos = []
  mochila = []

  ngOnInit() {
    this.getProductos()
  }

  async getProductos(){
    this.productos = await this.productoService.getProductos()
     console.table(this.productos)
     this.mochila = this.getMochila("Mochila");
    }

    getMochila(categoria : string){ 
      return this.productos.filter((Producto)=>Producto.categoria === categoria)
    }

}
