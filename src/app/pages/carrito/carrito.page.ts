import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
  standalone: false

})
export class CarritoPage implements OnInit {

  @Input() mostrarBoton: boolean = false;



  constructor() { }

  ngOnInit() {
  }

}
