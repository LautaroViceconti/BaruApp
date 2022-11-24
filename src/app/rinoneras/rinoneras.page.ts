import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { ProductosService } from '../core/service/productos.service';

@Component({
  selector: 'app-rinoneras',
  templateUrl: './rinoneras.page.html',
  styleUrls: ['./rinoneras.page.scss'],
})
export class RinonerasPage implements OnInit {

    constructor(private menuCtrl:MenuController, private productoService: ProductosService, productosService:ProductosService) {}
  
    productos = []
    rinonera = []
  
    ngOnInit() {
      this.getProductos()
    }
  
    async getProductos(){
      this.productos = await this.productoService.getProductos()
       console.table(this.productos)
       this.rinonera = this.getRinonera("Rinonera");
      }
  
      getRinonera(categoria : string){ 
        return this.productos.filter((Producto)=>Producto.categoria === categoria)
      }

}
