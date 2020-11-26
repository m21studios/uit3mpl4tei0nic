import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecoverpagePageRoutingModule } from './recoverpage-routing.module';

import { RecoverpagePage } from './recoverpage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecoverpagePageRoutingModule
  ],
  declarations: [RecoverpagePage]
})
export class RecoverpagePageModule {}
