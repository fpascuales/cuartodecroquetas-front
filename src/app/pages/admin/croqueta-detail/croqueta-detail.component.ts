import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { CroquetaService } from 'src/app/core/services/croqueta/croqueta.service';
import { CroquetaAllergensI, CroquetaI } from 'src/app/core/services/croqueta/models/croqueta.interface';

@Component({
  selector: 'app-croqueta-detail',
  templateUrl: './croqueta-detail.component.html',
  styleUrls: ['./croqueta-detail.component.scss'],
})
export class CroquetaDetailComponent {
  public croqueta?: CroquetaI;
  public hasSuccess: boolean = false;
  public allergensType: string[] = [
    'Gluten',
    'Crustáceos',
    'Moluscos',
    'Pescado',
    'Huevo',
    'Altramuces',
    'Mostaza',
    'Cacahuetes',
    'Frutos Secos',
    'Soja',
    'Sésamo',
    'Apio',
    'Leche',
    'Anhídrido Sulfuroso',
  ];
  public allergensSelected: CroquetaAllergensI[] = [];
  constructor(
    private activatedRoute: ActivatedRoute,
    private croquetaService: CroquetaService,
    private router: Router
  ) {
    this.activatedRoute.params
      .pipe(
        switchMap((params) =>
          this.croquetaService.getCroquetaById(params['id'])
        )
      )
      .subscribe((croqueta) => {
        this.croqueta = croqueta;
        this.allergensSelected = [...croqueta.allergens];
      });
  }
  public existsInAllergensSelected(allergen: string): boolean {
    return this.allergensSelected.some(
      (selected) => selected.type === allergen
    );
  }
  public removeCroqueta(id: string) {
    this.croquetaService.deleteCroqueta(id).subscribe(() => {},
      (error) => { return error; }
    );
    this.hasSuccess = true;
    this.router.navigate(['admin/croqueta-list'])
  }
  public navigateToEditById(id: string) {
    this.router.navigate(['admin/croqueta-edit', id]);
  }
}
