import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CroquetaListComponent } from './croqueta-list.component';

const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  component: CroquetaListComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CroquetaListRoutingModule { }
