import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewshomePageRoutingModule } from './newshome-routing.module';

import { NewshomePage } from './newshome.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewshomePageRoutingModule
  ],
  declarations: [NewshomePage]
})
export class NewshomePageModule {}
