import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GallerypagePageRoutingModule } from './gallerypage-routing.module';

import { GallerypagePage } from './gallerypage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GallerypagePageRoutingModule
  ],
  declarations: [GallerypagePage]
})
export class GallerypagePageModule {}
