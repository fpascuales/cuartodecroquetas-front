import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CroquetaEditRoutingModule } from './croqueta-edit-routing.module';
import { CroquetaEditComponent } from './croqueta-edit.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    CroquetaEditComponent
  ],
  imports: [
    CommonModule,
    CroquetaEditRoutingModule,
    SharedModule
  ]
})
export class CroquetaEditModule { }
