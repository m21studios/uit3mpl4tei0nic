import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsbookmarkPage } from './newsbookmark.page';

const routes: Routes = [
  {
    path: '',
    component: NewsbookmarkPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewsbookmarkPageRoutingModule {}
