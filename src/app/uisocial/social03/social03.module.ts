import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Social03PageRoutingModule } from './social03-routing.module';

import { Social03Page } from './social03.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Social03PageRoutingModule
  ],
  declarations: [Social03Page]
})
export class Social03PageModule {}
