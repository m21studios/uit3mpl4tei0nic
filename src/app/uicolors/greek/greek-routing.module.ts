import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GreekPage } from './greek.page';

const routes: Routes = [
  {
    path: '',
    component: GreekPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GreekPageRoutingModule {}
