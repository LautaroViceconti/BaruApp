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

  ngOnInit() {
    this.getProductos()
  }

  async getProductos(){
    this.productos = await this.productoService.getProductos()
     console.table(this.productos)
    }

  onClick(){
    this.menuCtrl.toggle()
  }

}
