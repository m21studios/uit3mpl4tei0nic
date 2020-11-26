import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Social04PageRoutingModule } from './social04-routing.module';

import { Social04Page } from './social04.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Social04PageRoutingModule
  ],
  declarations: [Social04Page]
})
export class Social04PageModule {}
