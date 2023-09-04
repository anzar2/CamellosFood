import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'perfil-usuario',
    loadChildren: () => import('./perfilUsuario/perfilUsuario.module').then( m => m.PerfilUsuarioPageModule)
  },
  {
    path: 'direccion',
    loadChildren: () => import('./direccion/direccion.module').then( m => m.DireccionPageModule)
  },
  // {
  //   path: 'mis-direcciones',
  //   loadChildren: () => import('./perfilUsuario/misDirecciones/misDirecciones.module').then( m => m.MisDireccionesPageModule)
  // },
  {
    path: 'mis-cupones',
    loadChildren: () => import('./perfilUsuario/mis-cupones/mis-cupones.module').then( m => m.MisCuponesPageModule)
  },
  {
    path: 'mis-pedidos',
    loadChildren: () => import('./perfilUsuario/mis-pedidos/mis-pedidos.module').then( m => m.MisPedidosPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
