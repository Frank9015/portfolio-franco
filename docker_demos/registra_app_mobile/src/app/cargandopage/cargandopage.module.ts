import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CargandopagePageRoutingModule } from './cargandopage-routing.module';

import { CargandopagePage } from './cargandopage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CargandopagePageRoutingModule
  ],
  declarations: [CargandopagePage]
})
export class CargandopagePageModule {}
