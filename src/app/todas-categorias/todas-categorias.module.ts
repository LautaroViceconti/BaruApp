import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TodasCategoriasPageRoutingModule } from './todas-categorias-routing.module';

import { TodasCategoriasPage } from './todas-categorias.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TodasCategoriasPageRoutingModule
  ],
  declarations: [TodasCategoriasPage]
})
export class TodasCategoriasPageModule {}
