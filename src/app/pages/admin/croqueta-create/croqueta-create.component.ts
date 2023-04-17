import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-croqueta-create',
  templateUrl: './croqueta-create.component.html',
  styleUrls: ['./croqueta-create.component.scss']
})
export class CroquetaCreateComponent {
  public allergensType: string[] = ['Gluten', 'Crustáceos', 'Moluscos' , 'Pescado', 'Huevo', 'Altramuces', 'Mostaza', 'Cacahuetes', 'Frutos Secos', 'Soja', 'Sésamo', 'Apio', 'Leche', 'Anhídrido Sulfuroso']
  constructor(
    private router: Router
  ){}
  public createCroqueta(){

  }
}
