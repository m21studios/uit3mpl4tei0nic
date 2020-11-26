import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AsphalPageRoutingModule } from './asphal-routing.module';

import { AsphalPage } from './asphal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AsphalPageRoutingModule
  ],
  declarations: [AsphalPage]
})
export class AsphalPageModule {}
