import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Slides2pagePage } from './slides2page.page';

const routes: Routes = [
  {
    path: '',
    component: Slides2pagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Slides2pagePageRoutingModule {}
