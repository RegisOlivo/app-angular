import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuadroListComponent } from './quadro-list/quadro-list.component';
import { QuadroFormComponent } from './quadro-form/quadro-form.component';

const routes: Routes = [{ path: '', component: QuadroListComponent },
{path: 'form', component: QuadroFormComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuadroRoutingModule { }
