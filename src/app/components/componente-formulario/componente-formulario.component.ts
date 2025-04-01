import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-componente-formulario',
  standalone: true,
  imports: [CommonModule, IonicModule, FormsModule],
  templateUrl: './componente-formulario.component.html',
  styleUrls: ['./componente-formulario.component.scss']
})


export class ComponenteFormularioComponent  implements OnInit {

  nombre = '';
  precio = 0;
  precioAntes = 0;
  descuento = '';
  imagen = '';

  @Output() productoAgregado = new EventEmitter<any>();

  guardarProducto() {
    const producto = {
      id: Date.now(),
      nombre: this.nombre,
      precio: this.precio,
      precioAntes: this.precioAntes,
      descuento: this.descuento,
      imagen: this.imagen
    };
    this.productoAgregado.emit(producto);

    // Reset
    this.nombre = '';
    this.precio = 0;
    this.precioAntes = 0;
    this.descuento = '';
    this.imagen = '';
  }

  constructor() { }

  ngOnInit() {}

}
