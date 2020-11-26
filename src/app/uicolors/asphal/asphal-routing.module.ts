import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AsphalPage } from './asphal.page';

const routes: Routes = [
  {
    path: '',
    component: AsphalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AsphalPageRoutingModule {}
