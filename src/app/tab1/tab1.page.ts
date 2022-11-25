import { Component, OnInit } from '@angular/core';
import { MenuController} from '@ionic/angular';
import { ProductosService } from '../core/service/productos.service';
import { AlertController } from '@ionic/angular'
import { TodasCategoriasPage } from '../todas-categorias/todas-categorias.page';
import { TodasCategoriasPageModule } from '../todas-categorias/todas-categorias.module';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  
  

  constructor(private menuCtrl:MenuController, private productoService: ProductosService,
    public alertController: AlertController, productosService:ProductosService ) {}

  productos = []
  Nuevo = []
  BestSeller = []
  Favorito = []
  

  onClick(){
    this.menuCtrl.toggle()
  }

  ngOnInit() {
    this.getProductos()
  }

  async getProductos(){
    this.productos = await this.productoService.getProductos();
     console.table(this.productos);
     this.Nuevo = this.getNuevo();
     this.BestSeller = this.getBestSeller();
     this.Favorito = this.getFavorito();
    }


    getNuevo(){ 
      return this.productos.filter((producto)=>producto.nuevo === true)
    }

    getBestSeller(){ 
      return this.productos.filter((producto)=>producto.bestSellers === true)
    }


    getFavorito(){ 
      return this.productos.filter((producto)=>producto.favorito === true)
    }


    getProductoID(){ 
      return this.productos.map((producto)=>{return producto.id;})
    }

    getProductoNombre(){ 
      return this.productos.map((producto)=>{return producto.nombre;})
    }

    getProductoColor(){ 
      return this.productos.map((producto)=>{return producto.color;})
    }

    getProductoDescripcion(){ 
      return this.productos.map((producto)=>{return producto.descripcion;})
    }

    getProductoCategoria(){ 
      return this.productos.map((producto)=>{return producto.categoria;})
    }

    getProductoImagen(){ 
      return this.productos.map((producto)=>{return producto.imagen;})
    }

    getProductoImagenGrupo(){ 
      return this.productos.map((producto)=>{return producto.imagengrupo;})
    }

    getProductoNuevo(){ 
      return this.productos.map((producto)=>{return producto.nuevo;})
    }

    getProductoBestSellers(){ 
      return this.productos.map((producto)=>{return producto.bestSellers;})
    }

    
    public enviarData(){
      this.productoService.post('http://localhost:8080/usuario',
      {
        
      nombre: "Riñonera Smith",
      }
      )
      .subscribe(respuesta=>{ 
        console.log('Favorito Agregado!!!')
        this.getFavorito()
      })
    }

    




   
  
      


   
}

