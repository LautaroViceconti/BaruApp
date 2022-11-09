import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BandolerasPage } from './bandoleras.page';

const routes: Routes = [
  {
    path: '',
    component: BandolerasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BandolerasPageRoutingModule {}
