import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Social07PageRoutingModule } from './social07-routing.module';

import { Social07Page } from './social07.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Social07PageRoutingModule
  ],
  declarations: [Social07Page]
})
export class Social07PageModule {}
