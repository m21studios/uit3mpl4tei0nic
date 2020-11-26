import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GallerypagePage } from './gallerypage.page';

const routes: Routes = [
  {
    path: '',
    component: GallerypagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GallerypagePageRoutingModule {}
