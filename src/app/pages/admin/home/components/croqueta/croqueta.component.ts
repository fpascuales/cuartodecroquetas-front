import { Component, Input } from '@angular/core';
import { CroquetaTopI } from 'src/app/core/services/croqueta/models/croqueta.interface';

@Component({
  selector: 'app-croqueta',
  templateUrl: './croqueta.component.html',
  styleUrls: ['./croqueta.component.scss']
})
export class CroquetaComponent {

  @Input() public croqueta?: CroquetaTopI

}
