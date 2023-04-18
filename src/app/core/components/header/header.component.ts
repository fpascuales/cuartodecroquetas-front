import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { ActivatedRoute, ChildActivationEnd, Router } from '@angular/router';
import { HeaderLink } from './model/header.model';
import { headerLinks } from './config/header.config';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent{

  public isLogged: boolean = false;
  public headerLinksElements: HeaderLink[] = headerLinks;
  public currentUrl: string = '';

  constructor(
    private authService: AuthService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ){
    this.router.events.subscribe((event) => {
      if(event instanceof ChildActivationEnd && event.snapshot.url?.length > 0) {
        this.currentUrl = event.snapshot.url[0].path;
      }
    });
    this.authService.isLogged$.subscribe((isLogged) => {
      this.isLogged = isLogged;
    })
  }
  public logout() {
    this.authService.logout();
  }
  // public ngOnInit(): void {
  //   this.isLogged = this.authService.isLogged()    
  // }
  // public navigateToCroquetasList(){
  //   this.router.navigate(['admin/croqueta-list'])
  // }
  // public navigateToOrderList(){
  //   this.router.navigate(['admin/order-list'])
  // }
}
