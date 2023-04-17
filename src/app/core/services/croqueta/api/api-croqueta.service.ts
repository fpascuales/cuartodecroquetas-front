import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiCroquetaI, CroquetaRequestBody } from '../models/croqueta.interface';

const API_URL = 'https://cuartodecroquetas-back.vercel.app';

@Injectable({
  providedIn: 'root'
})
export class ApiCroquetaService {

  constructor(
    private http: HttpClient
  ) { }

  public getApiCroquetas(): Observable<ApiCroquetaI[]> {
    return this.http.get<ApiCroquetaI[]>(`${API_URL}/croquetas`);
  }
  public getApiCroquetaById(id: string): Observable<ApiCroquetaI> {
    return this.http.get<ApiCroquetaI>(`${API_URL}/croquetas/${id}`)
  }
  public createApiCroqueta(body: CroquetaRequestBody): Observable<ApiCroquetaI>{     
    return this.http.post<ApiCroquetaI>(`${API_URL}/croquetas`, body)    
  }
  public editApiCroqueta(body: CroquetaRequestBody, id: string): Observable<ApiCroquetaI>{
    return this.http.put<ApiCroquetaI>(`${API_URL}/croquetas/${id}`, body)
  }
  public deleteApiCroqueta(id: string): Observable<ApiCroquetaI> {
    return this.http.delete<ApiCroquetaI>(`${API_URL}/croquetas/${id}`)
  }  
}
