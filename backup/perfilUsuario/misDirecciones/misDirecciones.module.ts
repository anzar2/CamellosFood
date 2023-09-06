import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MisDireccionesPageRoutingModule } from './misDirecciones.routing.module';

import { MisDireccionesPage } from './misDirecciones.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MisDireccionesPageRoutingModule
  ],
  declarations: [MisDireccionesPage]
})
export class MisDireccionesPageModule {}
