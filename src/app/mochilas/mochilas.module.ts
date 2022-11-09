import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MochilasPageRoutingModule } from './mochilas-routing.module';

import { MochilasPage } from './mochilas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MochilasPageRoutingModule
  ],
  declarations: [MochilasPage]
})
export class MochilasPageModule {}
