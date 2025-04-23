import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  public appPages = [
    { title: 'Usuario', url: '/usuario', icon: 'person' },
    { title: 'Productos', url: '/producto', icon: 'bag' },
    { title: 'Registro producto', url: '/registrar-producto', icon: 'heart' },
    { title: 'Carrito', url: '/carrito', icon: 'archive' },
    { title: 'Trash', url: '/folder/trash', icon: 'trash' },
    { title: 'Spam', url: '/folder/spam', icon: 'warning' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
