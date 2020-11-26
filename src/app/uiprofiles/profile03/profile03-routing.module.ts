import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Profile03Page } from './profile03.page';

const routes: Routes = [
  {
    path: '',
    component: Profile03Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Profile03PageRoutingModule {}
