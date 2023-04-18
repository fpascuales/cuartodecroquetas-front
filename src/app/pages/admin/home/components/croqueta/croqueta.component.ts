import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CroquetaTopI } from 'src/app/core/services/croqueta/models/croqueta.interface';

@Component({
  selector: 'app-croqueta',
  templateUrl: './croqueta.component.html',
  styleUrls: ['./croqueta.component.scss']
})
export class CroquetaComponent {

  constructor( private router: Router){}
  @Input() public croqueta?: CroquetaTopI

  public navigateToDetail(id: string){
    this.router.navigate(['admin/croqueta-detail', id]);
  }
}
