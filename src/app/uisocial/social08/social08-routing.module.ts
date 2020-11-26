import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Social08Page } from './social08.page';

const routes: Routes = [
  {
    path: '',
    component: Social08Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Social08PageRoutingModule {}
