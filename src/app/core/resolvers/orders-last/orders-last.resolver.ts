import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { ApiOrderI } from '../../services/order/models/order.interface';
import { ApiOrderService } from '../../services/order/api/api-order.service';

@Injectable({
  providedIn: 'root'
})
export class OrdersLastResolver implements Resolve<ApiOrderI> {

  constructor(
    private apiOrderService: ApiOrderService
  ){}
  resolve(): Observable<ApiOrderI> {
    return this.apiOrderService.getLastApiOrder();
  }
}
