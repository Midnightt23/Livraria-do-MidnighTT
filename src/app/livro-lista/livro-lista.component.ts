import { Component, OnInit } from '@angular/core';
import { Livro } from '../livro';
import { Editora } from '../editora';
import { ControleEditoraService } from '../controle-editora.service';
import { ControleLivrosService } from '../controle-livros.service';

// Componente que mostra a lista de livros
@Component({
  selector: 'app-livro-lista',
  templateUrl: './livro-lista.component.html',
  styleUrl: './livro-lista.component.css'
})
export class LivroListaComponent implements OnInit {

  public editoras: Array<Editora> = []; // lista de editoras
  public livros: Array<Livro> = []; // lista de livros
  public livroSelecionado: Livro | null = null; // livro mostrado na modal de resumo
  public livroExcluir: Livro | null = null; // livro aguardando confirmacao de exclusao

  // injeta os dois servicos pelo construtor
  constructor(
    private servEditora: ControleEditoraService,
    private servLivros: ControleLivrosService
  ) { }

  // quando a tela carrega, preenche as listas
  ngOnInit(): void {
    this.editoras = this.servEditora.getEditoras();
    this.livros = this.servLivros.obterLivros();
  }

  // exclui o livro e atualiza a lista (conforme o roteiro)
  excluir = (codigo: number) => {
    this.servLivros.excluir(codigo);
    this.livros = this.servLivros.obterLivros();
  }

  // abre a modal de confirmacao de exclusao
  pedirExclusao = (livro: Livro) => {
    this.livroExcluir = livro;
  }

  // confirma a exclusao: chama excluir e fecha a modal
  confirmarExclusao = () => {
    if (this.livroExcluir) {
      this.excluir(this.livroExcluir.codigo);
      this.livroExcluir = null;
    }
  }

  // cancela a exclusao e fecha a modal
  cancelarExclusao = () => {
    this.livroExcluir = null;
  }

  // pega o nome da editora pelo codigo
  obterNome = (codEditora: number): string => {
    return this.servEditora.getNomeEditora(codEditora);
  }

  // abre a modal com o resumo do livro clicado
  abrirResumo = (livro: Livro) => {
    this.livroSelecionado = livro;
  }

  // fecha a modal do resumo
  fecharResumo = () => {
    this.livroSelecionado = null;
  }
}
