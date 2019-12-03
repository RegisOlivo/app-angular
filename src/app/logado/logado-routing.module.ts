import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LogadoComponent } from './logado.component';
import { DefaultComponent } from './default/default.component';

const routes: Routes = [
  {
    path: '',
    component: LogadoComponent,
    children: [
      { path: '', component: DefaultComponent },
      { path: 'instituicao', loadChildren: () => import('./instituicao/instituicao.module').then(m => m.InstituicaoModule) },
      { path: 'pessoa', loadChildren: () => import('./pessoa/pessoa.module').then(m => m.PessoaModule) },
      { path: 'evento', loadChildren: () => import('./evento/evento.module').then(m => m.EventoModule) },
      { path: 'atividade', loadChildren: () => import('./atividade/atividade.module').then(m => m.AtividadeModule) },
      { path: 'pacote', loadChildren: () => import('./pacote/pacote.module').then(m => m.PacoteModule) },
      { path: 'inscricao', loadChildren: () => import('./inscricao/inscricao.module').then(m => m.InscricaoModule) },
      { path: 'quadro', loadChildren: () => import('./quadro/quadro.module').then(m => m.QuadroModule) }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LogadoRoutingModule { }
