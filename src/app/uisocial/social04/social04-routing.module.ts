import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Social04Page } from './social04.page';

const routes: Routes = [
  {
    path: '',
    component: Social04Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Social04PageRoutingModule {}
