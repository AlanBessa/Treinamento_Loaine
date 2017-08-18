import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  // styleUrls: ['./data-binding.component.css']
  styles: [
    `
      .highlight {
          background-color:  yellow;
          font-weight: bold;
      }
    `
  ]
})
export class DataBindingComponent implements OnInit {

  url = 'https://loiane.training/';
  cursoAngular = true;
  urlImagem = 'http://lorempixel.com/400/200/nature';

  valorAtual = '';
  valorSalvo = '';

  isMouseOver = false;
  nomeDoCurso = 'Angular';

  valorInicial = 15;

  nome = 'abc';

  pessoa: any = {
    nome: 'def',
    idade: 19
  };

  constructor() { }

  ngOnInit() {
  }

  botaoClicado() {
    alert('Botão clicado!');
  }

  onKeyUp(evento: KeyboardEvent) {
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  salvarValor(valor) {
    this.valorSalvo = valor;
  }

  getValor() {
    return 1;
  }

  getCurtirCurso() {
    return true;
  }

  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver;
  }

  onMudouValor(evento) {
    console.log(evento.novoValor);
  }
}
