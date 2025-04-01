import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrarProductoPageRoutingModule } from './registrar-producto-routing.module';

import { RegistrarProductoPage } from './registrar-producto.page';
import { ComponenteCarritoComponent } from "../../components/componente-carrito/componente-carrito.component";
import { ComponenteFormularioComponent } from "../../components/componente-formulario/componente-formulario.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrarProductoPageRoutingModule,
    ComponenteCarritoComponent,
    ComponenteFormularioComponent
],
  declarations: [RegistrarProductoPage]
})
export class RegistrarProductoPageModule {}
