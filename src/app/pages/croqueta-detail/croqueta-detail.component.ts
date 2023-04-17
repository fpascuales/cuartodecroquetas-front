import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { CroquetaService } from 'src/app/core/services/croqueta/croqueta.service';
import { CroquetaI } from 'src/app/core/services/croqueta/models/croqueta.interface';

@Component({
  selector: 'app-croqueta-detail',
  templateUrl: './croqueta-detail.component.html',
  styleUrls: ['./croqueta-detail.component.scss']
})
export class CroquetaDetailComponent {
  public croqueta?: CroquetaI;

  constructor(
    private activatedRoute: ActivatedRoute,
    private croquetaService: CroquetaService
  ){
    this.activatedRoute.params.pipe(
      switchMap((params) => this.croquetaService.getCroquetaById(params['id']))
    ).subscribe((croqueta) => {
      this.croqueta = croqueta;
    })
    
  }
  public replaceSpaceAllergen (allergen: string):string {
    return allergen.replace(' ', '-')
  }
}
