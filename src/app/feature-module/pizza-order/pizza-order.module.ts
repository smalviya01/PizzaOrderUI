import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PizzaOrderRoutingModule } from './pizza-order-routing.module';
import { PizzaOrderComponent } from './components/pizza-order/pizza-order.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PizzaOrderComponent
  ],
  imports: [
    CommonModule,
    PizzaOrderRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PizzaOrderModule { }
