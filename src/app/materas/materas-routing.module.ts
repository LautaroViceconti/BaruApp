import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaterasPage } from './materas.page';

const routes: Routes = [
  {
    path: '',
    component: MaterasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaterasPageRoutingModule {}
