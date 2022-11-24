import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { ProductosService } from '../core/service/productos.service';

@Component({
  selector: 'app-bandoleras',
  templateUrl: './bandoleras.page.html',
  styleUrls: ['./bandoleras.page.scss'],
})
export class BandolerasPage implements OnInit {

  constructor(private menuCtrl:MenuController, private productoService: ProductosService, productosService:ProductosService) {}

  productos = []
  bandolera = []

  ngOnInit() {
    this.getProductos()
  }

  async getProductos(){
    this.productos = await this.productoService.getProductos()
     console.table(this.productos)
     this.bandolera = this.getBandolera("Bandolera");
    }

    getBandolera(categoria : string){ 
      return this.productos.filter((Producto)=>Producto.categoria === categoria)
    }

  onClick(){
    this.menuCtrl.toggle()
  }

}
