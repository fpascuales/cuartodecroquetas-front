import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CroquetaDetailRoutingModule } from './croqueta-detail-routing.module';
import { CroquetaDetailComponent } from './croqueta-detail.component';

@NgModule({
  declarations: [
    CroquetaDetailComponent
  ],
  imports: [
    CommonModule,
    CroquetaDetailRoutingModule
  ]
})
export class CroquetaDetailModule { }
