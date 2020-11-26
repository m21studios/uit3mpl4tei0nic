import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MusicpagePageRoutingModule } from './musicpage-routing.module';

import { MusicpagePage } from './musicpage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MusicpagePageRoutingModule
  ],
  declarations: [MusicpagePage]
})
export class MusicpagePageModule {}
