import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmeraldPage } from './emerald.page';

const routes: Routes = [
  {
    path: '',
    component: EmeraldPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmeraldPageRoutingModule {}
