import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './auth/auth.guard';


const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  { path: 'logado', loadChildren: () => import('./logado/logado.module').then(m => m.LogadoModule), canActivate: [AuthGuard] },
  { path: 'logado/quadro', loadChildren: () => import('./logado/quadro/quadro.module').then(m => m.QuadroModule) },
  { path: 'logado/instituicao', loadChildren: () => import('./logado/instituicao/instituicao.module').then(m => m.InstituicaoModule) },
  { path: 'logado/pessoa', loadChildren: () => import('./logado/pessoa/pessoa.module').then(m => m.PessoaModule) },
  { path: 'logado/evento', loadChildren: () => import('./logado/evento/evento.module').then(m => m.EventoModule) },
  { path: 'logado/atividade', loadChildren: () => import('./logado/atividade/atividade.module').then(m => m.AtividadeModule) },
  { path: 'logado/pacote', loadChildren: () => import('./logado/pacote/pacote.module').then(m => m.PacoteModule) },
  { path: 'logado/inscricao', loadChildren: () => import('./logado/inscricao/inscricao.module').then(m => m.InscricaoModule) },
  { path: '**', component: PageNotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
