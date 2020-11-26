import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Social02PageRoutingModule } from './social02-routing.module';

import { Social02Page } from './social02.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Social02PageRoutingModule
  ],
  declarations: [Social02Page]
})
export class Social02PageModule {}
