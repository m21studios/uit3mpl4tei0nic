import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Social09PageRoutingModule } from './social09-routing.module';

import { Social09Page } from './social09.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Social09PageRoutingModule
  ],
  declarations: [Social09Page]
})
export class Social09PageModule {}
