import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BolsosPage } from './bolsos.page';

const routes: Routes = [
  {
    path: '',
    component: BolsosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BolsosPageRoutingModule {}
