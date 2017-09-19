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

  consultaCEP(cep, form) {
    cep = cep.replace(/\D/g, '');

    if(cep != "") {
        var validacep = /^[0-9]{8}$/;

        if(validacep.test(cep)) {

          this.resetaDadosForm(form)

          this.http.get(`"//viacep.com.br/ws/${cep}/json"`)
              .map(dados => dados.json())
              .subscribe(dados => this.populaDadosForm(dados, form));
        }
    }
  }

  populaDadosForm(dados, form) {
    /*form.setValue({
      nome: form.value.nome,
      email: form.value.email,
      endereco: {
        cep: dados.cep,
        numero: '',
        complemento: dados.complemento,
        rua: dados.logradouro,
        bairro: dados.bairro,
        cidade: dados.cidade,
        estado: dados.uf
      }
    });*/

    form.form.patchvalue({
      endereco: {
        cep: dados.cep,
        complemento: dados.complemento,
        rua: dados.logradouro,
        bairro: dados.bairro,
        cidade: dados.cidade,
        estado: dados.uf
      }
    });    
  }

  resetaDadosForm(formulario) {
    formulario.form.patchvalue({
      endereco: {
        complemento: null,
        rua: null,
        bairro: null,
        cidade: null,
        estado: null
      }
    });
  }
}
