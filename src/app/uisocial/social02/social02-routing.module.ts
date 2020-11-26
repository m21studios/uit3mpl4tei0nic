import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Social02Page } from './social02.page';

const routes: Routes = [
  {
    path: '',
    component: Social02Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Social02PageRoutingModule {}
