import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Social03Page } from './social03.page';

const routes: Routes = [
  {
    path: '',
    component: Social03Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Social03PageRoutingModule {}
