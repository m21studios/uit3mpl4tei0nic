import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Profile06PageRoutingModule } from './profile06-routing.module';

import { Profile06Page } from './profile06.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Profile06PageRoutingModule
  ],
  declarations: [Profile06Page]
})
export class Profile06PageModule {}
