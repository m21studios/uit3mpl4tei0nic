import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Slides2pagePageRoutingModule } from './slides2page-routing.module';

import { Slides2pagePage } from './slides2page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Slides2pagePageRoutingModule
  ],
  declarations: [Slides2pagePage]
})
export class Slides2pagePageModule {}
