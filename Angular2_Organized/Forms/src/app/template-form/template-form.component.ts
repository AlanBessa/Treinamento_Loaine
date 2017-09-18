import { Usuario } from './../../../../Rotas/src/app/login/usuario';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  usuario: any = {
    nome: 'Loiane',
    email: 'loiane@email.com',
    cep: '',
    numero: '',
    complemento: '',
    rua: '',
    bairro: '',
    cidade: '',
    estado: ''
  }

  constructor() { }

  ngOnInit() {
  }

  public onSubmit(form): void {
    console.log(form.value);

    console.log(this.usuario);
  }

}
