import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';


@Component({
  selector: 'app-componente-carrito',
  standalone: true,
  imports: [CommonModule, IonicModule],  //Al usar standalone true necesito decirle directamente que módulos auxiliares encesita
  templateUrl: './componente-carrito.component.html',
  styleUrls: ['./componente-carrito.component.scss']
})


export class ComponenteCarritoComponent implements OnInit {

  evento1(){
    console.log("hrftg")
  }

  evento2(){
    console.log("holaaa")
  }


  @Input() textoBoton: string = 'COMPRAR';
  @Input() colorBoton: string = 'tertiary';
  @Input() titulo: string = 'PRODUCTOS RECOMENDADOS'
  @Input() mostrarBotonCompra: boolean = false;
  @Output() messageEvent = new EventEmitter<string>
  @Output() eliminarProducto = new EventEmitter<number>();
  @Input() listaProductos: any[] = [];

  

  mostrar: boolean = true;

  productos = [
    {
      id: 1,
      nombre: 'Audífonos Bluetooth Lenovo LP75',
      imagen: '',
      precio: 64000,
      precioAntes: 100000,
      descuento: '36% OFF'
    },
    {
      id: 2,
      nombre: 'Monitor LG 24" Full HD Freesync',
      imagen: '',
      precio: 440900,
      precioAntes: 699900,
      descuento: '37% OFF'
    },
    {
      id: 3,
      nombre: 'Audífonos Huawei Freebuds SE 3',
      imagen: '',
      precio: 162900,
      precioAntes: 199000,
      descuento: '18% OFF'
    },
    {
      id: 4,
      nombre: 'Auriculares 1Hora AUT205 LED',
      imagen: '',
      precio: 41993,
      precioAntes: 59990,
      descuento: '30% OFF'
    },
    {
      id: 5,
      nombre: 'Mouse Logitech G203 RGB',
      imagen: '',
      precio: 89900,
      precioAntes: 120000,
      descuento: '25% OFF'
    },
    {
      id: 6,
      nombre: 'Teclado Redragon K552 RGB',
      imagen: '',
      precio: 134900,
      precioAntes: 179000,
      descuento: '24% OFF'
    },
    {
      id: 7,
      nombre: 'Cámara Web Full HD 1080p',
      imagen: '',
      precio: 119900,
      precioAntes: 149900,
      descuento: '20% OFF'
    },
    {
      id: 8,
      nombre: 'Disco Duro Externo 1TB',
      imagen: '',
      precio: 209900,
      precioAntes: 289000,
      descuento: '27% OFF'
    },
    {
      id: 9,
      nombre: 'Silla Gamer Reclinable',
      imagen: '',
      precio: 429000,
      precioAntes: 599000,
      descuento: '28% OFF'
    },
    {
      id: 10,
      nombre: 'Smartwatch Amazfit Bip U',
      imagen: '',
      precio: 189900,
      precioAntes: 249900,
      descuento: '24% OFF'
    }
  ];



  emitirMensaje(){
    this.messageEvent.emit("Hola soy tu hijo")
  }

  constructor() {}

  ngOnInit() {}
}

