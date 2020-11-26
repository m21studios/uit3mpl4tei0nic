import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Social05PageRoutingModule } from './social05-routing.module';

import { Social05Page } from './social05.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Social05PageRoutingModule
  ],
  declarations: [Social05Page]
})
export class Social05PageModule {}
