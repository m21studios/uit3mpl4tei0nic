import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JunePage } from './june.page';

const routes: Routes = [
  {
    path: '',
    component: JunePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JunePageRoutingModule {}
