import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Profile09PageRoutingModule } from './profile09-routing.module';

import { Profile09Page } from './profile09.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Profile09PageRoutingModule
  ],
  declarations: [Profile09Page]
})
export class Profile09PageModule {}
