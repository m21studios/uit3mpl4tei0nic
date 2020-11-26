import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MapspagePageRoutingModule } from './mapspage-routing.module';

import { MapspagePage } from './mapspage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapspagePageRoutingModule
  ],
  declarations: [MapspagePage]
})
export class MapspagePageModule {}
