import { Component, NgModule } from '@angular/core';
import { AlertController, MenuController } from '@ionic/angular';
import { ProductosService } from '../core/service/productos.service';





@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  

  

  constructor(private menuCtrl:MenuController, private productoService: ProductosService,
    public alertController: AlertController, productosService:ProductosService ) {}

    productos = [];
    
    

    ngOnInit(): void {
      this.getProductos()
     
      
    }
    
  
  
    async getProductos(){
      this.productos = await this.productoService.getProductos();
       console.table(this.productos);
       
      }

   

 }


   
  

  
