import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RinonerasPageRoutingModule } from './rinoneras-routing.module';

import { RinonerasPage } from './rinoneras.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RinonerasPageRoutingModule
  ],
  declarations: [RinonerasPage]
})
export class RinonerasPageModule {}
