import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CroquetaCreateComponent } from './croqueta-create.component';

const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  component: CroquetaCreateComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CroquetaCreateRoutingModule { }
