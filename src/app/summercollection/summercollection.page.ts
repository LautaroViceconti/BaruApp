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

  usuarios = []

  ngOnInit() {
    this.form = this.formBuilder.group({
      textAreaComentario: ['']
      
      
    },
    this.getUsuarios()

    );
  }


  onClick(){
    this.menuCtrl.toggle()
  }


  async getUsuarios(){
    this.usuarios = await this.reviewService.getUsuarios();
     console.table(this.usuarios);
     
    }

  public enviarData(){
    this.reviewService.post('http://localhost:8080/usuario/',
    {
      email:"Lautaro Viceconti",
      nombre: this.form.value.textAreaComentario,
      prioridad: 10
      }
    )
    .subscribe(respuesta=>{ 
      console.log('Comentario!!!')
      this.getUsuarios();
      this.form.reset();
    })
  }


}
