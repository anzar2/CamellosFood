import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfilUsuarioPage } from './perfilUsuario.page';

const routes: Routes = [
  {
    path: '',
    component: PerfilUsuarioPage
  },
  
  {
    path: 'misTarjetas',
    loadChildren: () => import('./misTarjetas/misTarjetas.module').then( m => m.MisTarjetasPageModule)
  },
  {
    path: 'misDirecciones',
    loadChildren: () => import('./misDirecciones/misDirecciones.module').then( m => m.MisDireccionesPageModule)
  },
  {
    path: 'misPedidos',
    loadChildren: () => import('./mis-pedidos/mis-pedidos.module').then( m => m.MisPedidosPageModule)
  },
  {
    path: 'misCupones',
    loadChildren: () => import('./mis-cupones/mis-cupones.module').then( m => m.MisCuponesPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfilUsuarioPageRoutingModule {}
