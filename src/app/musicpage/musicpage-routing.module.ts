import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MusicpagePage } from './musicpage.page';

const routes: Routes = [
  {
    path: '',
    component: MusicpagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MusicpagePageRoutingModule {}
