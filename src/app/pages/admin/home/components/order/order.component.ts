import { Component, Input } from '@angular/core';
import { ApiOrderI } from 'src/app/core/services/order/models/order.interface';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent {

  @Input() public order?: ApiOrderI

}
