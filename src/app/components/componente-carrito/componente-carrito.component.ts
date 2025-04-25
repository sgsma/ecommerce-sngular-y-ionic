import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Producto } from 'src/app/data/interfaces/producto';
@Component({
  selector: 'app-componente-carrito',
  standalone: true,
  imports: [CommonModule, IonicModule],
  templateUrl: './componente-carrito.component.html',
  styleUrls: ['./componente-carrito.component.scss']
})
export class ComponenteCarritoComponent {
  @Input() listaProductos: Producto[] = [];
  @Input() modo: 'producto' | 'carrito' = 'producto'; // Define si muestra COMPRAR o ELIMINAR
  @Output() productoAccionado = new EventEmitter<Producto>(); // Emite el producto clickeado

  constructor() {}

  ejecutarAccion(producto: Producto) {
    this.productoAccionado.emit(producto);
  }
}
