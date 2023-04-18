// import { Injectable } from '@angular/core';
// import {
//   Router, Resolve,
//   RouterStateSnapshot,
//   ActivatedRouteSnapshot
// } from '@angular/router';
// import { Observable, of } from 'rxjs';
// import { OrderService } from '../../services/order/order.service';
// import { ApiOrderI } from '../../services/order/models/order.interface';

// @Injectable({
//   providedIn: 'root'
// })
// export class OrderDetailResolver implements Resolve<ApiOrderI> {
//   constructor(
//     private ordersService: OrderService,
//   ){}

//   resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ApiOrderI> {
//     return this.ordersService.getOrderById();
//   }
// }
