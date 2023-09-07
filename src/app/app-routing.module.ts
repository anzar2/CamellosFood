import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./inicio/inicio.module').then(m => m.InicioModule)
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'productos',
    loadChildren: () => import('./productos/productos.module').then( m => m.InicioPageModule)
  },
  {
    path: 'perfil-usuario',
    loadChildren: () => import('./perfilUsuario/perfilUsuario.module').then( m => m.PerfilUsuarioPageModule)
  },  {
    path: 'detalle-carrito',
    loadChildren: () => import('./detalle-carrito/detalle-carrito.module').then( m => m.DetalleCarritoPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
