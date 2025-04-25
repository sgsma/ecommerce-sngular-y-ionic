import { Component, OnInit } from '@angular/core';
import { ListarProductosService } from 'src/app/data/services/listar-productos.service';
import { Producto } from 'src/app/data/interfaces/producto';


@Component({
  selector: 'app-producto',
  templateUrl: './producto.page.html',
  styleUrls: ['./producto.page.scss'],
  standalone: false
})
export class ProductoPage implements OnInit {

  productos: Producto[] = [];

  constructor(private productosService: ListarProductosService) {}

  async ngOnInit() {
    this.productos = await this.productosService.obtenerProductos();
  }

  comprarProducto(producto: Producto) {
    this.productosService.comprarProducto(producto);
  }
}