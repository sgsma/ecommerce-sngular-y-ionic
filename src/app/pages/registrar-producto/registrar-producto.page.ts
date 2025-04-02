import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-registrar-producto',
  templateUrl: './registrar-producto.page.html',
  styleUrls: ['./registrar-producto.page.scss'],
  standalone: false
})


export class RegistrarProductoPage {
  productos: any[] = [];

  agregarProducto(producto: any) {
    this.productos.push(producto);
  }

}
