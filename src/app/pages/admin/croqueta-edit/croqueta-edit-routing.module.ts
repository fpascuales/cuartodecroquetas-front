import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CroquetaEditComponent } from './croqueta-edit.component';

const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  component: CroquetaEditComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CroquetaEditRoutingModule { }
