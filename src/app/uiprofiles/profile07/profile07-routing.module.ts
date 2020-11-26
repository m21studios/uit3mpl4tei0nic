import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Profile07Page } from './profile07.page';

const routes: Routes = [
  {
    path: '',
    component: Profile07Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Profile07PageRoutingModule {}
