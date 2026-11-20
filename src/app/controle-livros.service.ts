import { Injectable } from '@angular/core';
import { Livro } from './livro';

// Servico que controla os livros
@Injectable({
  providedIn: 'root'
})
export class ControleLivrosService {

  // lista de livros ja cadastrados
  livros: Array<Livro> = [
    {
      codigo: 1,
      codEditora: 1,
      titulo: "Harry Potter e a Pedra Filosofal",
      resumo: "Um garoto descobre que e bruxo e vai estudar em Hogwarts.",
      autores: ["J. K. Rowling"]
    },
    {
      codigo: 2,
      codEditora: 1,
      titulo: "Harry Potter e a Camara Secreta",
      resumo: "Harry investiga os misterios da camara secreta de Hogwarts.",
      autores: ["J. K. Rowling"]
    },
    {
      codigo: 3,
      codEditora: 3,
      titulo: "It: A Coisa",
      resumo: "Um grupo de amigos enfrenta um mal ancestral na cidade de Derry.",
      autores: ["Stephen King"]
    },
    {
      codigo: 4,
      codEditora: 3,
      titulo: "O Iluminado",
      resumo: "Uma familia isolada em um hotel assombrado durante o inverno.",
      autores: ["Stephen King"]
    },
    {
      codigo: 5,
      codEditora: 2,
      titulo: "Percy Jackson e o Ladrao de Raios",
      resumo: "Um semideus descobre sua origem e parte em uma missao olimpica.",
      autores: ["Rick Riordan"]
    },
    {
      codigo: 6,
      codEditora: 2,
      titulo: "Percy Jackson e o Mar de Monstros",
      resumo: "Percy e seus amigos buscam o Velocino de Ouro.",
      autores: ["Rick Riordan"]
    },
    {
      codigo: 7,
      codEditora: 4,
      titulo: "O Senhor dos Aneis: A Sociedade do Anel",
      resumo: "Frodo inicia a jornada para destruir o Um Anel.",
      autores: ["J. R. R. Tolkien"]
    },
    {
      codigo: 8,
      codEditora: 4,
      titulo: "O Hobbit",
      resumo: "Bilbo Bolseiro embarca em uma aventura inesperada.",
      autores: ["J. R. R. Tolkien"]
    },
    {
      codigo: 9,
      codEditora: 3,
      titulo: "A Game of Thrones",
      resumo: "Nobres casas disputam o Trono de Ferro em Westeros.",
      autores: ["George R. R. Martin"]
    },
    {
      codigo: 10,
      codEditora: 7,
      titulo: "O Codigo Da Vinci",
      resumo: "Um simbologista desvenda misterios ocultos em obras de arte.",
      autores: ["Dan Brown"]
    },
    {
      codigo: 11,
      codEditora: 5,
      titulo: "1984",
      resumo: "Uma distopia sobre vigilancia e controle totalitario.",
      autores: ["George Orwell"]
    },
    {
      codigo: 12,
      codEditora: 5,
      titulo: "A Revolucao dos Bichos",
      resumo: "Animais de uma fazenda se rebelam contra os humanos.",
      autores: ["George Orwell"]
    },
    {
      codigo: 14,
      codEditora: 2,
      titulo: "A Culpa e das Estrelas",
      resumo: "Dois jovens com cancer vivem uma historia de amor intensa.",
      autores: ["John Green"]
    },
    {
      codigo: 15,
      codEditora: 7,
      titulo: "A Garota no Trem",
      resumo: "Um thriller psicologico sobre uma testemunha improvavel.",
      autores: ["Paula Hawkins"]
    },
    {
      codigo: 16,
      codEditora: 6,
      titulo: "O Alquimista",
      resumo: "Um pastor parte em busca de seu tesouro e de sua lenda pessoal.",
      autores: ["Paulo Coelho"]
    },
    {
      codigo: 17,
      codEditora: 7,
      titulo: "Jogos Vorazes",
      resumo: "Katniss luta pela sobrevivencia em uma arena mortal.",
      autores: ["Suzanne Collins"]
    }
  ];

  constructor() { }

  // retorna a lista de livros
  obterLivros(): Array<Livro> {
    return this.livros;
  }

  // retorna um livro pelo codigo
  obterLivro(codigo: number): Livro | undefined {
    return this.livros.find(livro => livro.codigo == codigo);
  }

  // altera os dados de um livro ja existente
  alterar(livro: Livro): void {
    const indice = this.livros.findIndex(item => item.codigo == livro.codigo);
    if (indice >= 0) {
      this.livros[indice] = livro;
    }
  }

  // inclui um livro novo na lista
  incluir(livro: Livro): void {
    // procura o maior codigo que ja existe
    let maiorCodigo = 0;
    for (let i = 0; i < this.livros.length; i++) {
      if (this.livros[i].codigo > maiorCodigo) {
        maiorCodigo = this.livros[i].codigo;
      }
    }
    // o novo livro recebe o maior codigo mais um
    livro.codigo = maiorCodigo + 1;
    this.livros.push(livro);
  }

  // exclui um livro pelo codigo
  excluir(codigo: number): void {
    const indice = this.livros.findIndex(livro => livro.codigo == codigo);
    this.livros.splice(indice, 1);
  }
}
