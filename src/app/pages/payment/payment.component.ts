import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiOrderI } from 'src/app/core/services/order/models/order.interface';
import { OrderService } from 'src/app/core/services/order/order.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit{
  public lastOrder?: ApiOrderI | null
  public countdown: number = 20
  constructor(
    private orderService: OrderService,
    private router: Router
  ){

    
  }

  public ngOnInit(): void {
    this.orderService.getLastOrder().subscribe((order) => {
      this.lastOrder = order;
    })
    setInterval(() => {
      this.countdown--;
      if(this.countdown === 0){
        this.navigateToHome();
      } 
    }, 1000);    
  }
  public navigateToHome():void {
    this.router.navigate(['/']);
  }
}
