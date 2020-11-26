import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsmainPage } from './newsmain.page';

const routes: Routes = [
  {
    path: '',
    component: NewsmainPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewsmainPageRoutingModule {}
