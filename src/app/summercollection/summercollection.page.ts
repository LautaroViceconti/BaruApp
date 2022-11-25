import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MenuController} from '@ionic/angular';
import { ProductosService } from '../core/service/productos.service';
import { ReviewService } from '../review.service';

@Component({
  selector: 'app-summercollection',
  templateUrl: './summercollection.page.html',
  styleUrls: ['./summercollection.page.scss'],
})
export class SummercollectionPage implements OnInit {
  
  public respuesta:any = [];
  public comentarios:any = [];
  comentarioText:string;
  public form: FormGroup;

  constructor(private menuCtrl:MenuController, private productoService: ProductosService, private formBuilder: FormBuilder, private reviewService: ReviewService) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      textAreaComentario: ['']
      
    }

    );
  }


  onClick(){
    this.menuCtrl.toggle()
  }

  public enviarData(){
    this.productoService.post('http://localhost:8080/usuario/',
    {
      nombre:"Lauti"
      }
    )
    .subscribe(respuesta=>{ 
      console.log('Comentario!!!')
      
    })
  }


}
