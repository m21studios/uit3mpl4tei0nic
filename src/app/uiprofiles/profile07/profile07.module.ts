import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Profile07PageRoutingModule } from './profile07-routing.module';

import { Profile07Page } from './profile07.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Profile07PageRoutingModule
  ],
  declarations: [Profile07Page]
})
export class Profile07PageModule {}
