import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OlvidastecontraseniaPageRoutingModule } from './olvidastecontrasenia-routing.module';

import { OlvidastecontraseniaPage } from './olvidastecontrasenia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OlvidastecontraseniaPageRoutingModule
  ],
  declarations: [OlvidastecontraseniaPage]
})
export class OlvidastecontraseniaPageModule {}
