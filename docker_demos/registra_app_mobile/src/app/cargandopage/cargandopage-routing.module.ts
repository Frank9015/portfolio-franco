import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CargandopagePage } from './cargandopage.page';

const routes: Routes = [
  {
    path: '',
    component: CargandopagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CargandopagePageRoutingModule {}
