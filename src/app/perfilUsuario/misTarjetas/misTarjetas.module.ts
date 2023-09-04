import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MisTarjetasPageRoutingModule } from './misTarjetas.routing.module';

import { MisTarjetasPage } from './misTarjetas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MisTarjetasPageRoutingModule
  ],
  declarations: [MisTarjetasPage]
})
export class MisTarjetasPageModule {}
