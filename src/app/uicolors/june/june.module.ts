import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JunePageRoutingModule } from './june-routing.module';

import { JunePage } from './june.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JunePageRoutingModule
  ],
  declarations: [JunePage]
})
export class JunePageModule {}
