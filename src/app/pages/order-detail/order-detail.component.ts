import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { OrderCroquetaI, OrderRequestBody } from 'src/app/core/services/order/models/order.interface';
import { OrderService } from 'src/app/core/services/order/order.service';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss']
})
export class OrderDetailComponent implements OnInit{
  public orders: OrderCroquetaI[] = []
  public date = new Date().toLocaleDateString();
  public time = new Date().toLocaleTimeString();

  constructor(
    private orderService: OrderService,
    private router: Router
  ) {}

  public ngOnInit(): void {
    this.orders = history.state.order
  }
  public totalOrder(): number{
    let total = 0
    for (const subtotalOrder of this.orders) {
      total += subtotalOrder.subtotal  
    } 
    return total
  }
  public navigateToHome() {
    this.router.navigate(['home']);
  }
  public navigateToPayment(orders: OrderCroquetaI[]){
    if(orders){
      this.createOrder().pipe(
        switchMap(createdOrder => {
          return this.router.navigate(['payment'], { state : { lastOrder: createdOrder}});
        })
      ).subscribe();
    }  
  }  
  private createOrder(){
    const orderBody: OrderRequestBody = {
      orderCroqueta: this.orders.map(order => ({
        croqueta: order.croqueta._id,
        quantity: order.quantity,
        subtotal: order.subtotal
      })),
      date: this.date,
      time: this.time,
      total: this.totalOrder()
    };  
    return this.orderService.createOrder(orderBody)
  }
}
