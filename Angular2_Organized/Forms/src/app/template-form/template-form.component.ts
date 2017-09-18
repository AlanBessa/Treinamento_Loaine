import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  public retornaValidacao: boolean = false;

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
    console.log(form);

    if(!form.valid) {
      this.retornaValidacao = true;
    }

    console.log(this.usuario);
  }

  public aplicaErro(campo): boolean {
    return !campo.valid && campo.touched;
  }

}
