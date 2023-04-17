import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CroquetaService } from 'src/app/core/services/croqueta/croqueta.service';
import { CroquetaI } from 'src/app/core/services/croqueta/models/croqueta.interface';
import { OrderCroquetaI } from 'src/app/core/services/order/models/order.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit{
  public croquetas?: CroquetaI[];
  public order: OrderCroquetaI[] = []
  constructor(
    private croquetasService: CroquetaService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ){}

  public ngOnInit(): void {
    this.activatedRoute.data.subscribe((data) => {
      if(data['croquetaData']){
        this.croquetas = data['croquetaData'];
      }
      else{
        this.getCroquetas();
      }
    })
  }
  public addToOrder(orderCroqueta: OrderCroquetaI){
    const orderCroquetaExist = this.order?.find((croquetaToFind) => croquetaToFind.croqueta._id === orderCroqueta.croqueta._id)
    if(orderCroquetaExist){
      orderCroquetaExist.quantity = orderCroqueta.quantity
      orderCroquetaExist.subtotal = orderCroquetaExist.croqueta.price * orderCroqueta.quantity
    }
    else{
      this.order?.push(orderCroqueta)
      orderCroqueta.subtotal = orderCroqueta.croqueta.price * orderCroqueta.quantity
    }
  }
  public totalOrder(): number{
    let total = 0
    for (const subtotalOrder of this.order) {
      total += subtotalOrder.subtotal  
    } 
    return total
  }
  public navigateToOrderDetail(order: OrderCroquetaI[]) {
    if(order.length > 0){  
      this.router.navigate(['order-detail'], { state: { order } });
    }    
  }
  private getCroquetas() {
    this.croquetasService.getCroquetas().subscribe((croquetas: CroquetaI[]) => {
      this.croquetas = croquetas;
    })
  }
}