import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Social01Page } from './social01.page';

const routes: Routes = [
  {
    path: '',
    component: Social01Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Social01PageRoutingModule {}
