import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderDetailRoutingModule } from './order-detail-routing.module';
import { OrderDetailComponent } from './order-detail.component';
import { OrderComponent } from './components/order/order.component';


@NgModule({
  declarations: [
    OrderDetailComponent,
    OrderComponent
  ],
  imports: [
    CommonModule,
    OrderDetailRoutingModule
  ]
})
export class OrderDetailModule { }
