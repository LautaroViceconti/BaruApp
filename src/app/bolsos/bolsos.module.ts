import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BolsosPageRoutingModule } from './bolsos-routing.module';

import { BolsosPage } from './bolsos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BolsosPageRoutingModule
  ],
  declarations: [BolsosPage]
})
export class BolsosPageModule {}
