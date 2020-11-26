import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Profile03PageRoutingModule } from './profile03-routing.module';

import { Profile03Page } from './profile03.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Profile03PageRoutingModule
  ],
  declarations: [Profile03Page]
})
export class Profile03PageModule {}
