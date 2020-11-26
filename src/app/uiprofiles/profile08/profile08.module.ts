import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Profile08PageRoutingModule } from './profile08-routing.module';

import { Profile08Page } from './profile08.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Profile08PageRoutingModule
  ],
  declarations: [Profile08Page]
})
export class Profile08PageModule {}
