import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';

@Component({
  selector: 'app-input-texto',
  templateUrl: './input-texto.component.html'
})
export class InputTextoComponent implements OnInit {

  @Input() condicao: boolean = false;

  @Input() mensagem: string; 

  constructor() { }

  ngOnInit() {
    console.log(this.condicao);
    console.log(this.mensagem);
  }

}
