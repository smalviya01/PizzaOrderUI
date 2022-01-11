import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PizzaOrderComponent } from './components/pizza-order/pizza-order.component';

const routes: Routes = [
  {path:'', component: PizzaOrderComponent , pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PizzaOrderRoutingModule { }
