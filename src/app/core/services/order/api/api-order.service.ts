import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiOrderI, OrderRequestBody } from '../models/order.interface';

const API_URL = 'https://cuartodecroquetas-back.vercel.app';

@Injectable({
  providedIn: 'root'
})
export class ApiOrderService {

  constructor(
    private http: HttpClient
  ) { }

  public getApiOrders(): Observable<ApiOrderI[]> {
    return this.http.get<ApiOrderI[]>(`${API_URL}/orders`);
  }
  public getApiOrderById(id: string): Observable<ApiOrderI> {
    return this.http.get<ApiOrderI>(`${API_URL}/orders/${id}`)
  }
  public getLastApiOrder(): Observable<ApiOrderI> {
    return this.http.get<ApiOrderI>(`${API_URL}/orders/last`);
  }
  public getLastTenApiOrders(): Observable<ApiOrderI[]> {
    return this.http.get<ApiOrderI[]>(`${API_URL}/orders/lastten`);
  }
  public createApiOrder(body: OrderRequestBody): Observable<ApiOrderI> {
    return this.http.post<ApiOrderI>(`${API_URL}/orders`, body)
  }
}
