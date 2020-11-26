import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Social09Page } from './social09.page';

const routes: Routes = [
  {
    path: '',
    component: Social09Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Social09PageRoutingModule {}
