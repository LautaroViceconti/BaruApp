import { Component, OnInit } from '@angular/core';
import { MenuController} from '@ionic/angular';
import { ProductosService } from '../core/service/productos.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private menuCtrl:MenuController, private productoService: ProductosService,
    public alertController: AlertController, productosService:ProductosService ) {}
    
    searchTerm: string;
    productos = []
  

  ngOnInit() {
    this.getProductos()
  }

  async getProductos(){
    this.productos = await this.productoService.getProductos();
     console.table(this.productos);
  
    }

   

}
