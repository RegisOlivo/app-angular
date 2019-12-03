import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PacoteListComponent } from './pacote-list/pacote-list.component';
import { PacoteFormComponent } from './pacote-form/pacote-form.component';


const routes: Routes = [
  { path: '', component: PacoteListComponent },
{ path: 'form', component: PacoteFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PacoteRoutingModule { }
