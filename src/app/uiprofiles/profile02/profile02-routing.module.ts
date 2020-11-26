import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Profile02Page } from './profile02.page';

const routes: Routes = [
  {
    path: '',
    component: Profile02Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Profile02PageRoutingModule {}
