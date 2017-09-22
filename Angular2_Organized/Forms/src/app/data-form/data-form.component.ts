import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit {

  formulario: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private http: Http
  ) { }

  ngOnInit() {
    /*this.formulario = new FormGroup({
      nome: new FormControl(null),
      email: new FormControl(null)
    });*/

    this.formulario = this.formBuilder.group({
      nome: [null],
      email: [null]
    })
  }

  public onSubmit():void {
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

  public resetar():void {
    this.formulario.reset();
  }
}
