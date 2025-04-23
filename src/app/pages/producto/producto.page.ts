import { Component, OnInit } from '@angular/core';
import { ListarProductosService } from 'src/app/data/services/listar-productos.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.page.html',
  styleUrls: ['./producto.page.scss'],
  standalone: false
})
export class ProductoPage implements OnInit {

  productos: any[] = [];

  constructor(private productosService: ListarProductosService) {}

  ngOnInit() {
    this.productos = this.productosService.obtenerProductos();
  }

  recibirMensaje(mensaje: string) {
    console.log("El mensaje de mi hijo es: " + mensaje);
  }

}
