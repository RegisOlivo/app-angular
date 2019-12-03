import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LogadoRoutingModule } from './logado-routing.module';
import { LogadoComponent } from './logado.component';
import { DefaultComponent } from './default/default.component';
import { TopbarComponent } from './topbar/topbar.component';


@NgModule({
  declarations: [LogadoComponent, DefaultComponent, TopbarComponent],
  imports: [
    CommonModule,
    LogadoRoutingModule
  ],
  exports: [DefaultComponent, TopbarComponent]
})
export class LogadoModule { }
