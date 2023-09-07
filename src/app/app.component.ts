import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
// se crean métodos para abrir las barras laterales de la página -Rozas
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss', '../camellosfood.theme.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '', icon: 'home' },
    { title: 'Mi perfil', url: '/perfil-usuario', icon: 'person' },
    { title: 'Productos', url: '/productos/', icon: 'fast-food' },
    { title: 'Carrito', url: '/detalle-carrito', icon: 'cart' },
    { title: 'Cerrar sesión', url: '/folder/trash', icon: 'power' },
    { title: 'Productos', url: '/productos/', icon: 'fast-food' },

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

