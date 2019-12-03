import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AtividadeListComponent } from './atividade-list/atividade-list.component';
import { AtividadeFormComponent } from './atividade-form/atividade-form.component';


const routes: Routes = [
  { path: '', component: AtividadeListComponent },
  { path: 'form', component: AtividadeFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AtividadeRoutingModule { }
