import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewssettingsPage } from './newssettings.page';

const routes: Routes = [
  {
    path: '',
    component: NewssettingsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewssettingsPageRoutingModule {}
