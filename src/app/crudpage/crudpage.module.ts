import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrudpagePageRoutingModule } from './crudpage-routing.module';

import { CrudpagePage } from './crudpage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrudpagePageRoutingModule
  ],
  declarations: [CrudpagePage]
})
export class CrudpagePageModule {}
