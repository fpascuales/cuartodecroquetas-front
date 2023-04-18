import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ApiOrderI } from 'src/app/core/services/order/models/order.interface';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent {
  constructor( private router: Router){}
  @Input() public order?: ApiOrderI
  public navigateToDetail(){
    this.router.navigate(['admin/order-detail', this.order?._id]);
  }
}
