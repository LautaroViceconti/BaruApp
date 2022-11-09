import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RinonerasPage } from './rinoneras.page';

const routes: Routes = [
  {
    path: '',
    component: RinonerasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RinonerasPageRoutingModule {}
