import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Profile10PageRoutingModule } from './profile10-routing.module';

import { Profile10Page } from './profile10.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Profile10PageRoutingModule
  ],
  declarations: [Profile10Page]
})
export class Profile10PageModule {}
