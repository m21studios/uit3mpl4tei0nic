import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlurplePage } from './blurple.page';

const routes: Routes = [
  {
    path: '',
    component: BlurplePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlurplePageRoutingModule {}
