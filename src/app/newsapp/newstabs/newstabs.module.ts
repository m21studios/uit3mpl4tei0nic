import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewstabsPageRoutingModule } from './newstabs-routing.module';

import { NewstabsPage } from './newstabs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewstabsPageRoutingModule
  ],
  declarations: [NewstabsPage]
})
export class NewstabsPageModule {}
