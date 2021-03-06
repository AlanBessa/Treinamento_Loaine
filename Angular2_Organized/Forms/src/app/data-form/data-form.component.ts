import { EstadoBr } from './../shared/models/estado-br.model';
import { DropdownService } from './../shared/services/dropdown.service';
import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit {

  public formulario: FormGroup;

  public retornaValidacao: boolean = false;

  estados: EstadoBr[];

  constructor(
    private formBuilder: FormBuilder,
    private http: Http,
    private dropdownService: DropdownService
  ) { }

  ngOnInit() {
    this.dropdownService.getEstadosBr().subscribe(dados => this.estados = dados);

    /*this.formulario = new FormGroup({
      nome: new FormControl(null),
      email: new FormControl(null) 
    });*/

    this.formulario = this.formBuilder.group({
      nome: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      email: [null, [Validators.required, Validators.email]],
      endereco: this.formBuilder.group({
        cep: [null, Validators.required],
        numero: [null, Validators.required],
        complemento: [null],
        rua: [null, Validators.required],
        bairro: [null, Validators.required],
        cidade: [null, Validators.required],
        estado: [null, Validators.required]
      })
    })
  }

  public onSubmit(): void 
  {
    if(!this.formulario.valid) 
    {
      this.retornaValidacao = true;
      this.verificaValidacoesForm(this.formulario);

      return;
    }

    this.http.post('https://httpbin.org/post', JSON.stringify(this.formulario.value))
      .map(response => response)
      .subscribe(dados => {
        console.log(dados);

        //reseta form
        this.resetar();
      },
      (error: any) => alert('erro')
      );
  }

  private verificaValidacoesForm(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(campo => {
      const controle = formGroup.get(campo);
      controle.markAsDirty();

      if(controle instanceof FormGroup) {
        this.verificaValidacoesForm(controle);
      }
    });
  }

  public resetar(): void {
    this.formulario.reset();
  }

  public aplicaErro(campo: string): boolean {
    return !this.formulario.get(campo).valid && this.formulario.get(campo).touched || this.formulario.get(campo).dirty);
  }

  public aplicaTocado(campo: string): boolean {
    return this.formulario.get(campo).touched;
  }

  consultaCEP() {
    let cep = this.formulario.get('endereco.cep').value;

    cep = cep.replace(/\D/g, '');

    if(cep != "") {
        var validacep = /^[0-9]{8}$/;

        if(validacep.test(cep)) {

          this.resetaDadosForm()

          this.http.get(`"//viacep.com.br/ws/${cep}/json"`)
              .map(dados => dados.json())
              .subscribe(dados => this.populaDadosForm(dados));
        }
    }
  }

  populaDadosForm(dados) {
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

    this.formulario.patchValue({
      endereco: {
        cep: dados.cep,
        complemento: dados.complemento,
        rua: dados.logradouro,
        bairro: dados.bairro,
        cidade: dados.cidade,
        estado: dados.uf
      }
    });    

    //this.formulario.get('nome').setValue('teste');
  }

  resetaDadosForm() {
    this.formulario.patchValue({
      endereco: {
        complemento: null,
        rua: null,
        bairro: null,
        cidade: null,
        estado: null
      }
    });
  }

  verificaEmailInvalido() {
    let campoEmail = this.formulario.get('email');

    if (campoEmail.errors) {
      return campoEmail.errors['email'] && campoEmail.touched;
    }
  }
}
