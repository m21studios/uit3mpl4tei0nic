import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecoverpagePage } from './recoverpage.page';

const routes: Routes = [
  {
    path: '',
    component: RecoverpagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecoverpagePageRoutingModule {}
