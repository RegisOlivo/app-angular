import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventoRoutingModule } from './evento-routing.module';
import { EventoFormComponent } from './evento-form/evento-form.component';
import { EventoListComponent, ListaAtividadesDialog, ListaEditarDialog, ADDAtividadesDialog } from './evento-list/evento-list.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import { EventoService } from './evento.service';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [EventoFormComponent, EventoListComponent, ListaAtividadesDialog, ListaEditarDialog, ADDAtividadesDialog],
  imports: [
    CommonModule,
    EventoRoutingModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatTableModule,
    MatIconModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [EventoFormComponent, EventoListComponent, ListaAtividadesDialog, ListaEditarDialog, ADDAtividadesDialog],
  providers: [EventoService],
  entryComponents: [ListaAtividadesDialog, ListaEditarDialog, ADDAtividadesDialog]
})
export class EventoModule { }
