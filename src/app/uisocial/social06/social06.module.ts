import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Social06PageRoutingModule } from './social06-routing.module';

import { Social06Page } from './social06.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Social06PageRoutingModule
  ],
  declarations: [Social06Page]
})
export class Social06PageModule {}
