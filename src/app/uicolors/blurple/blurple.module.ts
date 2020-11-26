import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BlurplePageRoutingModule } from './blurple-routing.module';

import { BlurplePage } from './blurple.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BlurplePageRoutingModule
  ],
  declarations: [BlurplePage]
})
export class BlurplePageModule {}
