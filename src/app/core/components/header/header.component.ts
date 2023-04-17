import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

  public isLogged: boolean = false;
  constructor(
    private authService: AuthService,
    private router: Router
  ){}
  
  public ngOnInit(): void {
    this.isLogged = this.authService.isLogged()    
  }
  public navigateToCroquetasList(){
    this.router.navigate(['admin/croqueta-list'])
  }
  public navigateToOrderList(){
    this.router.navigate(['admin/order-list'])
  }
}
