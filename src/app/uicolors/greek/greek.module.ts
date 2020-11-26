import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GreekPageRoutingModule } from './greek-routing.module';

import { GreekPage } from './greek.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GreekPageRoutingModule
  ],
  declarations: [GreekPage]
})
export class GreekPageModule {}
