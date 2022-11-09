import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BandolerasPageRoutingModule } from './bandoleras-routing.module';

import { BandolerasPage } from './bandoleras.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BandolerasPageRoutingModule
  ],
  declarations: [BandolerasPage]
})
export class BandolerasPageModule {}
