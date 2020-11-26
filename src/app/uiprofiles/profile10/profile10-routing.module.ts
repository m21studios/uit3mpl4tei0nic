import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Profile10Page } from './profile10.page';

const routes: Routes = [
  {
    path: '',
    component: Profile10Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Profile10PageRoutingModule {}
