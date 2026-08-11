import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TEST1PageRoutingModule } from './test1-routing.module';

import { TEST1Page } from './test1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TEST1PageRoutingModule
  ],
  declarations: [TEST1Page]
})
export class TEST1PageModule {}
