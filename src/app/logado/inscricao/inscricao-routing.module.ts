import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InscricaoListComponent } from './inscricao-list/inscricao-list.component';
import { InscricaoFormComponent } from './inscricao-form/inscricao-form.component';


const routes: Routes = [
  { path: '', component: InscricaoListComponent },
{ path: 'form', component: InscricaoFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InscricaoRoutingModule { }
