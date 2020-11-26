import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Social10Page } from './social10.page';

const routes: Routes = [
  {
    path: '',
    component: Social10Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Social10PageRoutingModule {}
