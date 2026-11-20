import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LivroListaComponent } from './livro-lista/livro-lista.component';
import { LivroDadosComponent } from './livro-dados/livro-dados.component';

// rotas do sistema
const routes: Routes = [
  { path: "lista", component: LivroListaComponent }, // tela da lista de livros
  { path: "dados", component: LivroDadosComponent }, // tela de cadastro (novo)
  { path: "dados/:codigo", component: LivroDadosComponent }, // tela de edicao
  { path: "", redirectTo: "/lista", pathMatch: "full" } // rota padrao vai para a lista
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
