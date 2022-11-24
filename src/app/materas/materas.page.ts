import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { ProductosService } from '../core/service/productos.service';

@Component({
  selector: 'app-materas',
  templateUrl: './materas.page.html',
  styleUrls: ['./materas.page.scss'],
})
export class MaterasPage implements OnInit {

  constructor(private menuCtrl:MenuController, private productoService: ProductosService, productosService:ProductosService) {}

  productos = []
  matera = []

  ngOnInit() {
    this.getProductos()
  }

  async getProductos(){
    this.productos = await this.productoService.getProductos()
     console.table(this.productos)
     this.matera = this.getMatera("Matera");
    }

    getMatera(categoria : string){ 
      return this.productos.filter((Producto)=>Producto.categoria === categoria)
    }

}
