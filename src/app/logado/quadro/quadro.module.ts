import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuadroRoutingModule } from './quadro-routing.module';
import { QuadroListComponent } from './quadro-list/quadro-list.component';
import { QuadroFormComponent } from './quadro-form/quadro-form.component';
import { AuthModule } from 'src/app/auth/auth.module';
import { QuadroService } from './quadro.service';
import { FormsModule } from '@angular/forms';
import { SpinnerComponent } from './spinner/spinner.component';


@NgModule({
  declarations: [QuadroListComponent, QuadroFormComponent, SpinnerComponent],
  imports: [
    CommonModule,
    QuadroRoutingModule,
    AuthModule,
    FormsModule
  ],
  exports: [QuadroListComponent, QuadroFormComponent, SpinnerComponent],
  providers: [QuadroService]
})
export class QuadroModule { }
