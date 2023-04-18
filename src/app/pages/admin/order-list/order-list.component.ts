import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiOrderI } from 'src/app/core/services/order/models/order.interface';
import { OrderService } from 'src/app/core/services/order/order.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {
  public orders?: ApiOrderI[];

  constructor(
    private ordersService: OrderService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ){}
  public ngOnInit(): void {
    this.activatedRoute.data.subscribe((data) => {
      if(data['orderData']) {
        this.orders = data['orderData'];
      }
      else{
        this.getOrders()
      }
    })
  }
  private getOrders() {
    this.ordersService.getOrders().subscribe((orders: ApiOrderI[]) => {
      this.orders = orders;
    })
  }
}
