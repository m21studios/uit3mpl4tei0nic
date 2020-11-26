import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Profile08Page } from './profile08.page';

const routes: Routes = [
  {
    path: '',
    component: Profile08Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Profile08PageRoutingModule {}
