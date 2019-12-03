import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AtividadeRoutingModule } from './atividade-routing.module';
import { AtividadeListComponent } from './atividade-list/atividade-list.component';
import { AtividadeFormComponent } from './atividade-form/atividade-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import {MatListModule} from '@angular/material/list';


@NgModule({
  declarations: [AtividadeListComponent, AtividadeFormComponent],
  imports: [
    CommonModule,
    AtividadeRoutingModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatTableModule,
    MatListModule
  ]
})
export class AtividadeModule { }
