import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CroquetaService } from 'src/app/core/services/croqueta/croqueta.service';
import { CroquetaI } from 'src/app/core/services/croqueta/models/croqueta.interface';

@Component({
  selector: 'app-croqueta-edit',
  templateUrl: './croqueta-edit.component.html',
  styleUrls: ['./croqueta-edit.component.scss']
})
export class CroquetaEditComponent {
  public croqueta?: CroquetaI
  constructor(
    private activatedRoute: ActivatedRoute,
    private croquetaService: CroquetaService,
    private router: Router
  ){
    this.activatedRoute.params.subscribe((params) => {
      const croquetaId = params['id'];
      this.croquetaService.getCroquetaById(croquetaId).subscribe((croqueta) => {
        this.croqueta = croqueta;   
      })
    })
  }
  public navigateToEditById(id: string){
    this.router.navigate(['admin/croqueta-edit', id]);
  }
}