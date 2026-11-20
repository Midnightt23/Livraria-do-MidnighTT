import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Livro } from '../livro';
import { Editora } from '../editora';
import { ControleEditoraService } from '../controle-editora.service';
import { ControleLivrosService } from '../controle-livros.service';

// Componente da tela de cadastro/edicao de livro
@Component({
  selector: 'app-livro-dados',
  templateUrl: './livro-dados.component.html',
  styleUrl: './livro-dados.component.css'
})
export class LivroDadosComponent implements OnInit {

  public livro: Livro = new Livro(); // livro que vai ser cadastrado
  public autoresForm: string = ""; // texto com os autores (um por linha)
  public editoras: Array<Editora> = []; // lista de editoras para o combo
  public edicao: boolean = false; // indica se a tela esta editando

  // injeta os servicos, o roteador e a rota ativa pelo construtor
  constructor(
    private servEditora: ControleEditoraService,
    private servLivros: ControleLivrosService,
    private router: Router,
    private rota: ActivatedRoute
  ) { }

  // quando a tela carrega, preenche o combo e verifica se e edicao
  ngOnInit(): void {
    this.editoras = this.servEditora.getEditoras();

    // verifica se veio um codigo na rota (modo edicao)
    const codigo = this.rota.snapshot.paramMap.get("codigo");
    if (codigo) {
      const existente = this.servLivros.obterLivro(Number(codigo));
      if (existente) {
        this.edicao = true;
        // copia o livro para nao alterar a lista antes de salvar
        this.livro = { ...existente, autores: [...existente.autores] };
        this.autoresForm = this.livro.autores.join("\n");
      }
    }
  }

  // salva o livro (inclui novo ou altera existente) e volta para a lista
  incluir = () => {
    // separa os autores pela quebra de linha
    this.livro.autores = this.autoresForm.split("\n");
    if (this.edicao) {
      this.servLivros.alterar(this.livro);
    } else {
      this.servLivros.incluir(this.livro);
    }
    this.router.navigateByUrl("/lista");
  }
}
