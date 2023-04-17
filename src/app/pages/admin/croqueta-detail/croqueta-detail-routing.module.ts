import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CroquetaDetailComponent } from './croqueta-detail.component';

const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  component: CroquetaDetailComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CroquetaDetailRoutingModule { }
