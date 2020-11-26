import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Profile04Page } from './profile04.page';

const routes: Routes = [
  {
    path: '',
    component: Profile04Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Profile04PageRoutingModule {}
