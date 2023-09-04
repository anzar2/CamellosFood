import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MisDireccionesPage } from './misDirecciones.page';

const routes: Routes = [
  {
    path: '',
    component: MisDireccionesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MisDireccionesPageRoutingModule {}
