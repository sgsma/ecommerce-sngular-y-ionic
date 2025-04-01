import { isStandalone, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarritoPageRoutingModule } from './carrito-routing.module';

import { CarritoPage } from './carrito.page';
import { ComponenteCarritoComponent } from 'src/app/components/componente-carrito/componente-carrito.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarritoPageRoutingModule,
    ComponenteCarritoComponent
  ],
  declarations: [CarritoPage]
})
export class CarritoPageModule {}
