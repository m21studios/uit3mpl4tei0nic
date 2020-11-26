import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Profile04PageRoutingModule } from './profile04-routing.module';

import { Profile04Page } from './profile04.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Profile04PageRoutingModule
  ],
  declarations: [Profile04Page]
})
export class Profile04PageModule {}
