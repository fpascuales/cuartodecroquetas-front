import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CroquetaI } from 'src/app/core/services/croqueta/models/croqueta.interface';
import { OrderCroquetaI } from 'src/app/core/services/order/models/order.interface';

@Component({
  selector: 'app-croqueta',
  templateUrl: './croqueta.component.html',
  styleUrls: ['./croqueta.component.scss']
})
export class CroquetaComponent{
  public quantity?: number
  public order?: OrderCroquetaI
  constructor( private router: Router ){}

  @Input() public croqueta?: CroquetaI
  @Output() public onAddToOrder = new EventEmitter<OrderCroquetaI>()
  public navigateToDetail(id: string){
    this.router.navigate(['croqueta-detail', id]);
  }
  public dropOneOnClick(){
    this.quantity = this.quantity ? this.quantity - 1 : 0;
  }
  public addOneOnClick(){
    this.quantity = this.quantity ? this.quantity + 1 : 1;
  }
  public addToOrder(){
    if(this.croqueta && this.quantity){
      const orderCroqueta: OrderCroquetaI = {
        croqueta: this.croqueta,
        quantity: this.quantity,
        subtotal: this.croqueta.price * this.quantity
      }
      this.onAddToOrder.emit(orderCroqueta)
    }
  }  
}
