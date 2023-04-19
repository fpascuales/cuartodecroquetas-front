import { Component, Input, OnInit } from '@angular/core';
import { CroquetaService } from 'src/app/core/services/croqueta/croqueta.service';
import { CroquetaI } from 'src/app/core/services/croqueta/models/croqueta.interface';
import { ApiOrderCroquetaI } from 'src/app/core/services/order/models/order.interface';

@Component({
  selector: 'app-croqueta',
  templateUrl: './croqueta.component.html',
  styleUrls: ['./croqueta.component.scss']
})
export class CroquetaComponent implements OnInit{
  public croquetaDetail?: CroquetaI
  constructor(
    private croquetaService: CroquetaService
  ){}
  @Input() public croqueta?: ApiOrderCroquetaI

  public ngOnInit(): void {
    if(this.croqueta && this.croqueta.croqueta){
      this.croquetaService.getCroquetaById(this.croqueta?.croqueta).subscribe((data) => {
        this.croquetaDetail = data;   
      })
    }
  }
}
