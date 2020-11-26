import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewssettingsPageRoutingModule } from './newssettings-routing.module';

import { NewssettingsPage } from './newssettings.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewssettingsPageRoutingModule
  ],
  declarations: [NewssettingsPage]
})
export class NewssettingsPageModule {}
