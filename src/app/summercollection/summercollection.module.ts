import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SummercollectionPageRoutingModule } from './summercollection-routing.module';

import { SummercollectionPage } from './summercollection.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SummercollectionPageRoutingModule, 
    ReactiveFormsModule
  ],
  declarations: [SummercollectionPage]
})
export class SummercollectionPageModule {}
