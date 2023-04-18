import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { OrderCroquetaI } from 'src/app/core/services/order/models/order.interface';
import { OrderService } from 'src/app/core/services/order/order.service';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss']
})
export class OrderDetailComponent {
  public order?: OrderCroquetaI[]
  constructor(
    private activatedRoute: ActivatedRoute,
    private orderService: OrderService,
    private router: Router
  ){
    this.activatedRoute.params
    .pipe(
      switchMap((params) =>
      this.orderService.getOrderById(params['id']))
    )
    .subscribe()
    
  }

}
