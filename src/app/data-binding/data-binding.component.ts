import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  //styleUrls: ['./data-binding.component.css']
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

  url: string = "https://loiane.training/";
  cursoAngular: boolean = true;
  urlImagem = "http://lorempixel.com/400/200/nature";

  valorAtual: string = '';
  valorSalvo: string = '';

  isMouseOver: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  botaoClicado() {
    alert("Botão clicado!");
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

  onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver;
  }

}
