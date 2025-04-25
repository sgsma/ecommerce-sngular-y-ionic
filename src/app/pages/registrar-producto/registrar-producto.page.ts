import { Component } from '@angular/core';
import { ListarProductosService } from 'src/app/data/services/listar-productos.service';

@Component({
  selector: 'app-registrar-producto',
  templateUrl: './registrar-producto.page.html',
  styleUrls: ['./registrar-producto.page.scss'],
  standalone: false
})
export class RegistrarProductoPage {

  constructor(private productosService: ListarProductosService) {}

  agregarProducto(producto: any) {
    this.productosService.agregarProductoManual(producto);
  }

}
