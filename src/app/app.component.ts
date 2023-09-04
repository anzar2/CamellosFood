import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/inicio/', icon: 'home' },
    { title: 'Mi perfil', url: './perfil-usuario', icon: 'person' },
    { title: 'Productos', url: '/folder/favorites', icon: 'fast-food' },
    { title: 'Carrito', url: '/folder/archived', icon: 'cart' },
    { title: 'Cerrar sesión', url: '/folder/trash', icon: 'power' },
  ];
  constructor() {}
}
