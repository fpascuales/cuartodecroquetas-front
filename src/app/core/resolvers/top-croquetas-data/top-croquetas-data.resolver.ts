import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { CroquetaService } from '../../services/croqueta/croqueta.service';


@Injectable({
  providedIn: 'root'
})
export class TopCroquetasDataResolver implements Resolve<{name: String, quantity: number}[]> {

  constructor(
    private croquetasService: CroquetaService
  ){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<{name: String, quantity: number}[]> {
    return this.croquetasService.getTopCroquetas();
  }
}
