import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Profile09Page } from './profile09.page';

const routes: Routes = [
  {
    path: '',
    component: Profile09Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Profile09PageRoutingModule {}
