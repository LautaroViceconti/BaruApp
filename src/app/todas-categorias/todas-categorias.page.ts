import { Component, OnInit } from '@angular/core';
import { MenuController, AlertController } from '@ionic/angular';
import { ProductosService } from '../core/service/productos.service';

@Component({
  selector: 'app-todas-categorias',
  templateUrl: './todas-categorias.page.html',
  styleUrls: ['./todas-categorias.page.scss'],
})
export class TodasCategoriasPage implements OnInit {
  static this: any;

  constructor(private menuCtrl:MenuController, private productoService: ProductosService,
    public alertController: AlertController, productosService:ProductosService ) {}

    productos = []
    favorito = []

  ngOnInit() {
    this.getProductos()
  }

  async getProductos(){
    this.productos = await this.productoService.getProductos();
     console.table(this.productos);
     this.favorito = this.getFavorito();
    }


    getFavorito(){ 
      return this.productos.filter((producto)=>producto.favorito === true)
    }

}
