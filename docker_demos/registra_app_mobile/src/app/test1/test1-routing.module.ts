import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TEST1Page } from './test1.page';

const routes: Routes = [
  {
    path: '',
    component: TEST1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TEST1PageRoutingModule {}
