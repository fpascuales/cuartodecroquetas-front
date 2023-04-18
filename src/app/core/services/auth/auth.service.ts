import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, ReplaySubject, tap } from 'rxjs';
import { UserI } from './models/auth.model';
import { UserSignInResponseI } from './models/auth.model';

const AUTH_URL = 'https://cuartodecroquetas-back.vercel.app/admin'
const TOKEN_KEY = 'jwt-auth-token'


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isLogged$: ReplaySubject<boolean> = new ReplaySubject<boolean>(1);
  
  constructor(
    private http: HttpClient,
    private router: Router
  ) { 
    const isLogged = this.isLogged();
    this.isLogged$.next(isLogged)
  }
  public login(user: UserI): Observable<UserSignInResponseI> {      
    return this.http.post<UserSignInResponseI>(`${AUTH_URL}/login`, user).pipe(
      tap((res: UserSignInResponseI) => {
        const userToStore = JSON.stringify({
          token: res.token,
          user: res.userToLog.user,
          id: res.userToLog._id
        });
        localStorage.setItem(TOKEN_KEY, userToStore);        
        this.isLogged$.next(true);    
        this.router.navigate(['/admin/home']);
      })
    )
  }
  public isLogged(): boolean {
    const userToken = localStorage.getItem(TOKEN_KEY);
    if (!userToken) { return false }
    const isValidToken = JSON.parse(userToken)?.token
    return !!isValidToken
  }
  public getToken(): string | null {
    const token = localStorage.getItem(TOKEN_KEY);
    return token !== null ? JSON.parse(token).token : null;
  }
  public logout() {
    const removeToken = localStorage.removeItem(TOKEN_KEY);
    this.isLogged$.next(false);    
    if(removeToken === undefined) {      
      this.router.navigate(['admin/login'])
    }
  }
}