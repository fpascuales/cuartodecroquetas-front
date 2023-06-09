import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import { ApiOrderI } from '../../services/order/models/order.interface';
import { OrderService } from '../../services/order/order.service';

@Injectable({
  providedIn: 'root'
})
export class OrdersLastTenResolver implements Resolve<ApiOrderI[]> {

  constructor(
    private ordersService: OrderService
  ){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ApiOrderI[]> {
    return this.ordersService.getLastTenOrders();
  }
}
