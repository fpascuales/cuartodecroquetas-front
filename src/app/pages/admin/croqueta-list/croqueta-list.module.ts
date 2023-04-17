import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CroquetaListRoutingModule } from './croqueta-list-routing.module';
import { CroquetaListComponent } from './croqueta-list.component';
import { CroquetaComponent } from './components/croqueta/croqueta.component';


@NgModule({
  declarations: [
    CroquetaListComponent,
    CroquetaComponent
  ],
  imports: [
    CommonModule,
    CroquetaListRoutingModule
  ]
})
export class CroquetaListModule { }
