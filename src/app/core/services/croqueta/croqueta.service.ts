import { Observable, map, filter, switchMap, forkJoin } from 'rxjs';
import { Injectable } from '@angular/core';
import { ApiCroquetaService } from './api/api-croqueta.service';
import { ApiCroquetaI, CroquetaI, CroquetaRequestBody, CroquetaTopI } from './models/croqueta.interface';
import { ApiOrderService } from '../order/api/api-order.service';
import { ApiOrderI } from '../order/models/order.interface';

@Injectable({
  providedIn: 'root'
})
export class CroquetaService {

  constructor(
    private apiCroquetasService: ApiCroquetaService,
    private apiOrderService: ApiOrderService
  ) { }

  public getCroquetas(): Observable<CroquetaI[]> {
    return this.apiCroquetasService.getApiCroquetas().pipe(
      map((apiCroquetas: ApiCroquetaI[]) => this.transformCroquetas(apiCroquetas)),
      filter((croquetas: CroquetaI[]) => {
        return croquetas.length > 0;
      })
    )
  }
  public getCroquetaById(id: string): Observable<CroquetaI> {
    return this.apiCroquetasService.getApiCroquetaById(id).pipe(
      map((apiCroqueta) => {
        return this.transformCroqueta(apiCroqueta)
      })
    )
  }
  public getTopCroquetas(): Observable<CroquetaTopI[]> {
    return this.apiOrderService.getApiOrders().pipe(
      switchMap((orders: ApiOrderI[]) => {
        const croquetasSold: {[key: string]: number} = {};
        orders.forEach(order => {
          order.orderCroqueta.forEach(orderCroqueta => {
            if (!croquetasSold[orderCroqueta.croqueta]) {
              croquetasSold[orderCroqueta.croqueta] = 0;
            }
            croquetasSold[orderCroqueta.croqueta] += orderCroqueta.quantity;
          });
        });
        const sortedCroquetas = Object.keys(croquetasSold)
          .sort((a, b) => croquetasSold[b] - croquetasSold[a])
          .slice(0, 10);
        return forkJoin(sortedCroquetas.map(croquetaId => {
          return this.apiCroquetasService.getApiCroquetaById(croquetaId).pipe(
            map((croqueta) => {
              return {
                id: croqueta._id,
                image: croqueta.image,
                name: croqueta.name,
                quantity: croquetasSold[croquetaId],
              };
            })
          );
        }));
      })
    );
  }
  public createCroqueta(body: CroquetaRequestBody): Observable<CroquetaI> {     
    return this.apiCroquetasService.createApiCroqueta(body)
  }
  public editCroqueta(body: CroquetaRequestBody, id: string): Observable<CroquetaI>{
    return this.apiCroquetasService.editApiCroqueta(body, id)
  }
  public deleteCroqueta(id: string): Observable<CroquetaI>{    
    return this.apiCroquetasService.deleteApiCroqueta(id).pipe(
      map((apiCroqueta) => this.transformCroqueta(apiCroqueta)
      )
    )
  }
  private transformCroquetas(apiCroquetas: ApiCroquetaI[]): CroquetaI[] {
    const croquetaTransformed = apiCroquetas.map((croqueta) => this.transformCroqueta(croqueta));
    return croquetaTransformed
  }
  private transformCroqueta(apiCroqueta: ApiCroquetaI): CroquetaI {
    delete apiCroqueta.createAt;    
    return { ...apiCroqueta }
  }
}
