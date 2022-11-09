import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BilleterasPageRoutingModule } from './billeteras-routing.module';

import { BilleterasPage } from './billeteras.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BilleterasPageRoutingModule
  ],
  declarations: [BilleterasPage]
})
export class BilleterasPageModule {}
