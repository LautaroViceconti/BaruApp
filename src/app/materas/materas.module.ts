import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MaterasPageRoutingModule } from './materas-routing.module';

import { MaterasPage } from './materas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MaterasPageRoutingModule
  ],
  declarations: [MaterasPage]
})
export class MaterasPageModule {}
