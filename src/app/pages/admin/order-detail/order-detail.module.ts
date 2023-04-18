import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderDetailRoutingModule } from './order-detail-routing.module';
import { OrderDetailComponent } from './order-detail.component';
import { CroquetaComponent } from './components/croqueta/croqueta.component';


@NgModule({
  declarations: [
    OrderDetailComponent,
    CroquetaComponent
  ],
  imports: [
    CommonModule,
    OrderDetailRoutingModule
  ]
})
export class OrderDetailModule { }
