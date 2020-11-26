import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Profile06Page } from './profile06.page';

const routes: Routes = [
  {
    path: '',
    component: Profile06Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Profile06PageRoutingModule {}
