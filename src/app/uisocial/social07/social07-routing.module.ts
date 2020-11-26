import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Social07Page } from './social07.page';

const routes: Routes = [
  {
    path: '',
    component: Social07Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Social07PageRoutingModule {}
