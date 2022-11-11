import { Component, OnInit } from '@angular/core';
import { MenuController} from '@ionic/angular';
import { ProductosService } from '../core/service/productos.service';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  

  constructor(private menuCtrl:MenuController, private productoService: ProductosService,
    public alertController: AlertController, productosService:ProductosService ) {}

  productos = []
  

  onClick(){
    this.menuCtrl.toggle()
  }

  ngOnInit() {
    this.getProductos()
  }

  async getProductos(){
    this.productos = await this.productoService.getProductos()
     console.table(this.productos)
    }


  
}

