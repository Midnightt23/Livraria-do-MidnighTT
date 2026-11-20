import { Injectable } from '@angular/core';
import { Editora } from './editora';

// Servico que controla as editoras
@Injectable({
  providedIn: 'root'
})
export class ControleEditoraService {

  // lista de editoras ja cadastradas
  editoras: Array<Editora> = [
    { codEditora: 1, nome: "Rocco" },
    { codEditora: 2, nome: "Intrinseca" },
    { codEditora: 3, nome: "Suma" },
    { codEditora: 4, nome: "HarperCollins" },
    { codEditora: 5, nome: "Companhia das Letras" },
    { codEditora: 6, nome: "Record" },
    { codEditora: 7, nome: "Arqueiro" }
  ];

  constructor() { }

  // retorna a lista de editoras
  getEditoras(): Array<Editora> {
    return this.editoras;
  }

  // procura o nome da editora pelo codigo
  getNomeEditora(codEditora: number): string {
    return this.editoras.filter(editora => editora.codEditora == codEditora)[0].nome;
  }
}
