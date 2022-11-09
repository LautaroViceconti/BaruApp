import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MochilasPage } from './mochilas.page';

const routes: Routes = [
  {
    path: '',
    component: MochilasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MochilasPageRoutingModule {}
