import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Social05Page } from './social05.page';

const routes: Routes = [
  {
    path: '',
    component: Social05Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Social05PageRoutingModule {}
