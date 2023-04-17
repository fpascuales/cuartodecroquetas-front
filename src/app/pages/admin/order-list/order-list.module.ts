import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderListRoutingModule } from './order-list-routing.module';
import { OrderListComponent } from './order-list.component';
import { OrderComponent } from './components/order/order.component';


@NgModule({
  declarations: [
    OrderListComponent,
    OrderComponent
  ],
  imports: [
    CommonModule,
    OrderListRoutingModule
  ]
})
export class OrderListModule { }
