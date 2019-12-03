import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InstituicaoListComponent } from './instituicao-list/instituicao-list.component';
import { InstituicaoFormComponent } from './instituicao-form/instituicao-form.component';
import { InstituicaoEditComponent } from './instituicao-edit/instituicao-edit.component';


const routes: Routes = [
  { path: '', component: InstituicaoListComponent },
  { path: 'form', component: InstituicaoFormComponent },
  { path: 'edit/:id', component: InstituicaoEditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstituicaoRoutingModule { }
