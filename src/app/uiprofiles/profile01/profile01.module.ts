import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Profile01PageRoutingModule } from './profile01-routing.module';

import { Profile01Page } from './profile01.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Profile01PageRoutingModule
  ],
  declarations: [Profile01Page]
})
export class Profile01PageModule {}
