import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { CroquetaService } from '../../services/croqueta/croqueta.service';
import { CroquetaI } from '../../services/croqueta/models/croqueta.interface';

@Injectable({
  providedIn: 'root'
})
export class CroquetasDataResolver implements Resolve<CroquetaI[]> {

  constructor(
    private croquetasService: CroquetaService
  ){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<CroquetaI[]> {
    return this.croquetasService.getCroquetas();
  }
}
