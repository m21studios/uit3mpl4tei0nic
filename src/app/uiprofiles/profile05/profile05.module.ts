import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Profile05PageRoutingModule } from './profile05-routing.module';

import { Profile05Page } from './profile05.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Profile05PageRoutingModule
  ],
  declarations: [Profile05Page]
})
export class Profile05PageModule {}
