import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'

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

  constructor(private http: Http) { }

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

  consultaCEP(cep) {
    cep = cep.replace(/\D/g, '');

    if(cep != "") {
        var validacep = /^[0-9]{8}$/;

        if(validacep.test(cep)) {
          this.http.get(`"//viacep.com.br/ws/${cep}/json"`)
              .map(dados => dados.json())
              .subscribe(dados => console.log(dados));
        }
    }
  }
}
