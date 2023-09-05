import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
// se crean métodos para abrir las barras laterales de la página -Rozas
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
  constructor(private menuCtrl: MenuController) {}

  openFirstMenu() {
    // Open the menu by menu-id
    this.menuCtrl.enable(true, 'menu-principal');
    this.menuCtrl.open('menu-principal');
  }
  openEndMenu() {
    // Open the menu by side
    this.menuCtrl.enable(true, 'carrito');
    this.menuCtrl.open('carrito');
  }
}

