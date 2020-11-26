import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Social06Page } from './social06.page';

const routes: Routes = [
  {
    path: '',
    component: Social06Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Social06PageRoutingModule {}
