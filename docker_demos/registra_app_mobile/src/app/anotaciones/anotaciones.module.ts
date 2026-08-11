import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnotacionesPageRoutingModule } from './anotaciones-routing.module';

import { AnotacionesPage } from './anotaciones.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnotacionesPageRoutingModule
  ],
  declarations: [AnotacionesPage]
})
export class AnotacionesPageModule {}
