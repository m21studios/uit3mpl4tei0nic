import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewsdiscoverPageRoutingModule } from './newsdiscover-routing.module';

import { NewsdiscoverPage } from './newsdiscover.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewsdiscoverPageRoutingModule
  ],
  declarations: [NewsdiscoverPage]
})
export class NewsdiscoverPageModule {}
