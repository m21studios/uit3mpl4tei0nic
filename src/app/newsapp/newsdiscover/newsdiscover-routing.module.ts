import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsdiscoverPage } from './newsdiscover.page';

const routes: Routes = [
  {
    path: '',
    component: NewsdiscoverPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewsdiscoverPageRoutingModule {}
