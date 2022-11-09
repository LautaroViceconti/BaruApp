import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BilleterasPage } from './billeteras.page';

const routes: Routes = [
  {
    path: '',
    component: BilleterasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BilleterasPageRoutingModule {}
