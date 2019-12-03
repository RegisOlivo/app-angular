import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventoListComponent } from './evento-list/evento-list.component';
import { EventoFormComponent } from './evento-form/evento-form.component';
//import { AtividadeFormComponent } from '';

const routes: Routes = [
  { path: '', component: EventoListComponent },
  { path: 'form', component: EventoFormComponent },
  //{ path: 'form', component: AtividadeFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventoRoutingModule { }
