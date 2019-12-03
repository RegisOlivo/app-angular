import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PacoteRoutingModule } from './pacote-routing.module';
import { PacoteListComponent } from './pacote-list/pacote-list.component';
import { PacoteFormComponent } from './pacote-form/pacote-form.component';


@NgModule({
  declarations: [PacoteListComponent, PacoteFormComponent],
  imports: [
    CommonModule,
    PacoteRoutingModule
  ]
})
export class PacoteModule { }
