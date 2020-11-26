import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewsbookmarkPageRoutingModule } from './newsbookmark-routing.module';

import { NewsbookmarkPage } from './newsbookmark.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewsbookmarkPageRoutingModule
  ],
  declarations: [NewsbookmarkPage]
})
export class NewsbookmarkPageModule {}
