import { Component, OnInit } from '@angular/core';
import { ListarProductosService } from 'src/app/data/services/listar-productos.service';
import { Producto } from 'src/app/data/interfaces/producto';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
  standalone: false
})
export class CarritoPage implements OnInit {

  carrito: Producto[] = [];

  constructor(private productosService: ListarProductosService) {}

  ngOnInit() {
    this.carrito = this.productosService.obtenerCarrito();
  }

  eliminarProducto(producto: Producto) {
    this.productosService.eliminarDelCarrito(producto);
    // Actualizamos la lista local para que se refleje el cambio en pantalla
    this.carrito = this.productosService.obtenerCarrito();
  }
}
