import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { InstituicaoRoutingModule } from './instituicao-routing.module';
import { InstituicaoListComponent, EditarInstituicaoDialog } from './instituicao-list/instituicao-list.component';
import { InstituicaoFormComponent } from './instituicao-form/instituicao-form.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import { InstituicaoService } from './instituicao.service';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { InstituicaoEditComponent } from './instituicao-edit/instituicao-edit.component';


@NgModule({
  declarations: [InstituicaoListComponent, InstituicaoFormComponent, InstituicaoEditComponent, EditarInstituicaoDialog],
  imports: [
    CommonModule,
    InstituicaoRoutingModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatTableModule,
    MatIconModule,
    ReactiveFormsModule,
    MatDialogModule,
    FormsModule

  ],
  exports: [InstituicaoListComponent, InstituicaoFormComponent, InstituicaoEditComponent, EditarInstituicaoDialog],
  providers: [InstituicaoService],
  entryComponents: [EditarInstituicaoDialog]
})
export class InstituicaoModule { }
