import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CroquetaCreateRoutingModule } from './croqueta-create-routing.module';
import { CroquetaCreateComponent } from './croqueta-create.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    CroquetaCreateComponent
  ],
  imports: [
    CommonModule,
    CroquetaCreateRoutingModule,
    SharedModule
  ]
})
export class CroquetaCreateModule { }
