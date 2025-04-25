import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Producto } from 'src/app/data/interfaces/producto';
import { ProductoAPI } from 'src/app/data/interfaces/producto-api';


@Component({
  selector: 'app-componente-formulario',
  standalone: true,
  imports: [CommonModule, IonicModule, FormsModule],
  templateUrl: './componente-formulario.component.html',
  styleUrls: ['./componente-formulario.component.scss']
})


export class ComponenteFormularioComponent {
  nombre = '';
  precio = '';
  precioAntes = '';
  descuento = '';
  imagen = '';
  descripcion = '';
  categoria = '';

  @Output() productoAgregado = new EventEmitter<any>();


  guardarProducto() {
    // Calcula precioAntes automáticamente
    const precioNum = parseFloat(this.precio);
    const precioAntesNum = parseFloat(this.precioAntes) || parseFloat((precioNum * 1.2).toFixed(2));
    const descuentoCalculado = Math.round(100 - ((precioNum / precioAntesNum) * 100));
  
    const productoApiSimulado: ProductoAPI = {
      id: Date.now(),
      title: this.nombre,
      price: precioNum,
      description: this.descripcion,
      category: this.categoria,
      image: this.imagen,
      rating: {
        rate: 0,
        count: 0
      }
    };
  
    const productoAdaptado: Producto = {
      nombre: productoApiSimulado.title,
      precio: productoApiSimulado.price,
      precioAntes: precioAntesNum,
      descuento: `${descuentoCalculado}% OFF`,
      imagen: productoApiSimulado.image
    };
  
    this.productoAgregado.emit(productoAdaptado);
  
    // Limpia el formulario
    this.nombre = '';
    this.precio = '';
    this.precioAntes = '';
    this.descripcion = '';
    this.categoria = '';
    this.descuento = '';
    this.imagen = '';
  }
  
}