import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CroquetaI } from 'src/app/core/services/croqueta/models/croqueta.interface';

@Component({
  selector: 'app-croqueta',
  templateUrl: './croqueta.component.html',
  styleUrls: ['./croqueta.component.scss']
})
export class CroquetaComponent {

  constructor( private router: Router){}
  @Input() public croqueta?: CroquetaI
  @Output() public onRemoveCroqueta = new EventEmitter<void>();
  public navigateToDetail(id: string){
    this.router.navigate(['admin/croqueta-detail', id]);
  }
  public removeCroqueta() {
    this.onRemoveCroqueta.emit();
  }
}
