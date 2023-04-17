import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CroquetaService } from 'src/app/core/services/croqueta/croqueta.service';
import { CroquetaI } from 'src/app/core/services/croqueta/models/croqueta.interface';

@Component({
  selector: 'app-croqueta-list',
  templateUrl: './croqueta-list.component.html',
  styleUrls: ['./croqueta-list.component.scss'],
})
export class CroquetaListComponent implements OnInit {
  public croquetas?: CroquetaI[];

  constructor(
    private croquetasService: CroquetaService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}
  public ngOnInit(): void {
    this.activatedRoute.data.subscribe((data) => {
      if (data['croquetaData']) {
        this.croquetas = data['croquetaData'];
      } else {
        this.getCroquetas();
      }
    });
  }
  public navigateToCroquetaCreate() {
    this.router.navigate(['admin/croqueta-create']);
  }
  public removeCroqueta(id: string) {
    this.croquetasService.deleteCroqueta(id).subscribe(() => this.getCroquetas())
  }
  private getCroquetas() {
    this.croquetasService.getCroquetas().subscribe((croquetas: CroquetaI[]) => {
      this.croquetas = croquetas;
    });
  }
}
