import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductoAPI } from 'src/app/data/interfaces/producto-api';
import { Producto } from 'src/app/data/interfaces/producto';

@Injectable({
  providedIn: 'root'
})
export class ListarProductosService {

  private productos: Producto[] = [];
  private carrito: Producto[] = [];
  private productosCargados: boolean = false;

  constructor(private http: HttpClient) {}

  agregarProductoManual(producto: Producto) {
    this.productos.push(producto);
  }

  async obtenerProductos(): Promise<Producto[]> {
    if (this.productosCargados) {
      return this.productos;
    }

    try {
      const data: ProductoAPI[] = await this.http
        .get<ProductoAPI[]>('https://fakestoreapi.com/products')
        .toPromise();

      const adaptados = data.map(p => this.adaptarProductoAPI(p));
      this.productos.push(...adaptados);
      this.productosCargados = true;
      return this.productos;
    } catch (error) {
      console.error('Error al obtener productos del API:', error);
      return this.productos;
    }
  }

  private adaptarProductoAPI(api: ProductoAPI): Producto {
    const precioAntes = api.price * 1.2;
    const descuento = Math.round(100 - ((api.price / precioAntes) * 100));
    return {
      nombre: api.title,
      precio: parseFloat(api.price.toFixed(2)),
      precioAntes: parseFloat(precioAntes.toFixed(2)),
      descuento: `${descuento}% OFF`,
      imagen: api.image
    };
  }

  comprarProducto(producto: Producto) {
    this.carrito.push(producto);
  }

  obtenerCarrito(): Producto[] {
    return this.carrito;
  }

  eliminarDelCarrito(producto: Producto) {
    const index = this.carrito.indexOf(producto);
    if (index > -1) {
      this.carrito.splice(index, 1);
    }
  }
}
