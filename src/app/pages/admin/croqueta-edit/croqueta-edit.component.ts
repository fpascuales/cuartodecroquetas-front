import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { CroquetaService } from 'src/app/core/services/croqueta/croqueta.service';
import { CroquetaAllergensI, CroquetaI } from 'src/app/core/services/croqueta/models/croqueta.interface';

@Component({
  selector: 'app-croqueta-edit',
  templateUrl: './croqueta-edit.component.html',
  styleUrls: ['./croqueta-edit.component.scss']
})
export class CroquetaEditComponent {
  public croqueta?: CroquetaI
  public allergensType: string[] = ['Gluten', 'Crustáceos', 'Moluscos' , 'Pescado', 'Huevo', 'Altramuces', 'Mostaza', 'Cacahuetes', 'Frutos Secos', 'Soja', 'Sésamo', 'Apio', 'Leche', 'Anhídrido Sulfuroso']
  public allergensSelected: CroquetaAllergensI[] = []
  constructor(
    private activatedRoute: ActivatedRoute,
    private croquetaService: CroquetaService,
    private router: Router
  ){
    this.activatedRoute.params.pipe(
      switchMap((params) => this.croquetaService.getCroquetaById(params['id']))
    ).subscribe((croqueta) => {
      this.croqueta = croqueta;
      this.allergensSelected = [...croqueta.allergens]      
    }) 
  }
  existsInAllergensSelected(allergen: string): boolean {
    return this.allergensSelected.some((selected) => selected.type === allergen);
  }
  public navigateToEditById(id: string){
    this.router.navigate(['admin/croqueta-edit', id]);
  }
}