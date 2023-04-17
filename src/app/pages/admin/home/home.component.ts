import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CroquetaService } from 'src/app/core/services/croqueta/croqueta.service';
import { CroquetaTopI } from 'src/app/core/services/croqueta/models/croqueta.interface';
import { ApiOrderI } from 'src/app/core/services/order/models/order.interface';
import { OrderService } from 'src/app/core/services/order/order.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  public orders?: ApiOrderI[];
  public croquetas?: CroquetaTopI[]

  constructor(
    private orderService: OrderService,
    private croquetasService: CroquetaService,
    private activatedRoute: ActivatedRoute
  ){}

  public ngOnInit(): void {
    this.activatedRoute.data.subscribe((data) => {
      if(data['ordersData'] && data['topCroquetaData']){
        this.orders = data['ordersData'];
        this.croquetas = data['topCroquetaData'];
      }
      else{
        this.getLastTenOrders();
        this.getTopCroquetas();
      }
    })
  }
  private getTopCroquetas() {
    this.croquetasService.getTopCroquetas().subscribe((croquetas: CroquetaTopI[]) => {
      this.croquetas = croquetas;
    })
  }
  private getLastTenOrders() {
    this.orderService.getLastTenOrders().subscribe((orders: ApiOrderI[]) => {
      this.orders = orders;
    })
  }
}
