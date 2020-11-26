import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Profile01Page } from './profile01.page';

const routes: Routes = [
  {
    path: '',
    component: Profile01Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Profile01PageRoutingModule {}
