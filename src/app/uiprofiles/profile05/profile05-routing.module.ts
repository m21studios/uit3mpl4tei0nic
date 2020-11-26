import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Profile05Page } from './profile05.page';

const routes: Routes = [
  {
    path: '',
    component: Profile05Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Profile05PageRoutingModule {}
