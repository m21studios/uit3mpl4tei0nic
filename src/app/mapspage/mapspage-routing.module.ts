import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapspagePage } from './mapspage.page';

const routes: Routes = [
  {
    path: '',
    component: MapspagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapspagePageRoutingModule {}
