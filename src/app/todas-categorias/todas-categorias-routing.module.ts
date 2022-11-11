import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodasCategoriasPage } from './todas-categorias.page';

const routes: Routes = [
  {
    path: '',
    component: TodasCategoriasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TodasCategoriasPageRoutingModule {}
