import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Social10PageRoutingModule } from './social10-routing.module';

import { Social10Page } from './social10.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Social10PageRoutingModule
  ],
  declarations: [Social10Page]
})
export class Social10PageModule {}
