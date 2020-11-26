import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrudpagePage } from './crudpage.page';

const routes: Routes = [
  {
    path: '',
    component: CrudpagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrudpagePageRoutingModule {}
