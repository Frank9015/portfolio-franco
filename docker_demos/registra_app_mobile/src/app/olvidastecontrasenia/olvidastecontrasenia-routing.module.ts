import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OlvidastecontraseniaPage } from './olvidastecontrasenia.page';

const routes: Routes = [
  {
    path: '',
    component: OlvidastecontraseniaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OlvidastecontraseniaPageRoutingModule {}
