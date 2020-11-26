import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewsmainPageRoutingModule } from './newsmain-routing.module';

import { NewsmainPage } from './newsmain.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewsmainPageRoutingModule
  ],
  declarations: [NewsmainPage]
})
export class NewsmainPageModule {}
