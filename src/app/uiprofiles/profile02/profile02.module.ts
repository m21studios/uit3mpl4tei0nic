import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Profile02PageRoutingModule } from './profile02-routing.module';

import { Profile02Page } from './profile02.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Profile02PageRoutingModule
  ],
  declarations: [Profile02Page]
})
export class Profile02PageModule {}
