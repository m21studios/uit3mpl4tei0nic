import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TomatoPageRoutingModule } from './tomato-routing.module';

import { TomatoPage } from './tomato.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TomatoPageRoutingModule
  ],
  declarations: [TomatoPage]
})
export class TomatoPageModule {}
