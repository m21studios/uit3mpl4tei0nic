import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Social08PageRoutingModule } from './social08-routing.module';

import { Social08Page } from './social08.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Social08PageRoutingModule
  ],
  declarations: [Social08Page]
})
export class Social08PageModule {}
