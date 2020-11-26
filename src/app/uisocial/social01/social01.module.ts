import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Social01PageRoutingModule } from './social01-routing.module';

import { Social01Page } from './social01.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Social01PageRoutingModule
  ],
  declarations: [Social01Page]
})
export class Social01PageModule {}
