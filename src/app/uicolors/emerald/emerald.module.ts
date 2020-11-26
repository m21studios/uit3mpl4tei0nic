import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmeraldPageRoutingModule } from './emerald-routing.module';

import { EmeraldPage } from './emerald.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmeraldPageRoutingModule
  ],
  declarations: [EmeraldPage]
})
export class EmeraldPageModule {}
