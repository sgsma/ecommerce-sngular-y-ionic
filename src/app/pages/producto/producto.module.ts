import { isStandalone, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductoPageRoutingModule } from './producto-routing.module';

import { ProductoPage } from './producto.page';
import { ComponenteCarritoComponent } from 'src/app/components/componente-carrito/componente-carrito.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductoPageRoutingModule,
    ComponenteCarritoComponent
  ],
  declarations: [ProductoPage]
})
export class ProductoPageModule {}
