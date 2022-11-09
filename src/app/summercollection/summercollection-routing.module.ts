import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SummercollectionPage } from './summercollection.page';

const routes: Routes = [
  {
    path: '',
    component: SummercollectionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SummercollectionPageRoutingModule {}
