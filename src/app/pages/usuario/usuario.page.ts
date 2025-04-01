import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.page.html',
  styleUrls: ['./usuario.page.scss'],
  standalone: false
})
export class UsuarioPage implements OnInit {

  usuario = {
    nombre: 'Sara San Martin',
    perfil: 'Compradora frecuente',
    email: 's.sanmartin@ejemplo.com',
    telefono: '(301) 555-1234',
    ciudad: 'Bogotá, Colombia',
    compras: 128,
    antiguedad: 'Miembro desde 2021',
    reputacion: 'Excelente',
    intereses: ['Tecnología', 'Moda', 'Libros'],
    foto: 'https://i.pravatar.cc/150?img=65' 
  };

  constructor() { }

  ngOnInit() {
  }

}
