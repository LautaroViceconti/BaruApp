import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { ProductosService } from '../core/service/productos.service';

@Component({
  selector: 'app-bolsos',
  templateUrl: './bolsos.page.html',
  styleUrls: ['./bolsos.page.scss'],
})
export class BolsosPage implements OnInit {

  constructor(private menuCtrl:MenuController, private productoService: ProductosService, productosService:ProductosService) {}

  productos = []
  bolso = []

  ngOnInit() {
    this.getProductos()
  }

  async getProductos(){
    this.productos = await this.productoService.getProductos()
     console.table(this.productos)
     this.bolso = this.getBolso("Bolso");
    }

    getBolso(categoria : string){ 
      return this.productos.filter((Producto)=>Producto.categoria === categoria)
    }
}



