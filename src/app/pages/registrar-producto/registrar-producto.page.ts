import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-registrar-producto',
  templateUrl: './registrar-producto.page.html',
  styleUrls: ['./registrar-producto.page.scss'],
  standalone: false
})
export class RegistrarProductoPage implements OnInit {

  productos: any[] = [];

  agregarProducto(producto: any) {
    this.productos.push(producto);
  }

  constructor() { }

  ngOnInit() {
  }

}
