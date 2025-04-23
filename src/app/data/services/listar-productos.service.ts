import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListarProductosService {
  private productos: any[] = [];

  constructor() {}

  agregarProducto(producto: any) {
    this.productos.push(producto);
  }

  obtenerProductos(): any[] {
    return this.productos;
  }
}
