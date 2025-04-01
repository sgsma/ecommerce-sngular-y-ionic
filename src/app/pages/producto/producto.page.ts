import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.page.html',
  styleUrls: ['./producto.page.scss'],
  standalone: false
})
export class ProductoPage implements OnInit {

  @Input() mostrarBoton: boolean = true;
  
  recibirMensaje(mensaje: string){
    console.log("El mensaje de mi hijo es: " + mensaje)
  }

  constructor() {}

  ngOnInit() {}1
}
