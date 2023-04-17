import { Injectable } from '@angular/core';
import { ApiOrderService } from './api/api-order.service';
import { Observable, map, switchMap } from 'rxjs';
import { ApiOrderCroquetaI, ApiOrderI, OrderRequestBody, OrderRequestCroquetaI } from './models/order.interface';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(
    private apiOrderService: ApiOrderService
  ) { }
  
  public getOrders(): Observable<ApiOrderI[]> {
    return this.apiOrderService.getApiOrders().pipe(
      map((apiOrders: ApiOrderI[]) => {
        return apiOrders.map((apiOrder: ApiOrderI) => {
          const order = {
            _id: apiOrder._id,
            total: apiOrder.total,
            date: apiOrder.date,
            time: apiOrder.time,
            num: apiOrder.num,
            orderCroqueta: apiOrder.orderCroqueta.map(orderCroqueta => ({
              croqueta: orderCroqueta.croqueta,
              quantity: orderCroqueta.quantity,
              subtotal: orderCroqueta.subtotal
            }))
          };
          return order;
        })
      })
    )
  }
  public getLastOrder(): Observable<ApiOrderI | null> {
    return this.apiOrderService.getLastApiOrder().pipe(
      map((apiOrder: ApiOrderI) => {
        if (!apiOrder) {
          return null;
        }
        const order = {
          _id: apiOrder._id,
          total: apiOrder.total,
          date: apiOrder.date,
          time: apiOrder.time,
          num: apiOrder.num,
          orderCroqueta: apiOrder.orderCroqueta.map(orderCroqueta => ({
            croqueta: orderCroqueta.croqueta,
            quantity: orderCroqueta.quantity,
            subtotal: orderCroqueta.subtotal
          }))
        };
        return order;
      })
    );
  }
  public getLastTenOrders(): Observable<ApiOrderI[]> {
    return this.apiOrderService.getLastTenApiOrders().pipe(
      map((apiOrders: ApiOrderI[]) => {
        return apiOrders.map((apiOrder: ApiOrderI) => {
          const order = {
            _id: apiOrder._id,
            total: apiOrder.total,
            date: apiOrder.date,
            time: apiOrder.time,
            num: apiOrder.num,
            orderCroqueta: apiOrder.orderCroqueta.map(orderCroqueta => ({
              croqueta: orderCroqueta.croqueta,
              quantity: orderCroqueta.quantity,
              subtotal: orderCroqueta.subtotal
            }))
          };
          return order;
        })
      })
    )
  }
  public createOrder(orderBody: OrderRequestBody): Observable<ApiOrderI>{
    return this.getLastOrder().pipe(
      map((lastOrder: ApiOrderI | null) => {
        const apiOrderCroquetas: ApiOrderCroquetaI[] = orderBody.orderCroqueta.map((order: OrderRequestCroquetaI) => ({
          croqueta: order.croqueta,
          quantity: order.quantity,
          subtotal: order.subtotal
        }));
        const nextNum = lastOrder ? lastOrder.num + 1 : 1;
        const apiOrder: ApiOrderI = {
          date: orderBody.date,
          time: orderBody.time,
          num: nextNum,
          orderCroqueta: apiOrderCroquetas,
          total: orderBody.total
        };
        return apiOrder;
      }),
      switchMap((apiOrder: ApiOrderI) => this.apiOrderService.createApiOrder(apiOrder))
    );
  }
}
