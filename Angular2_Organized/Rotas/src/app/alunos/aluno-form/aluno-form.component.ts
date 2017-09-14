import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

import { Subscription } from "rxjs/Rx";

import { AlunosService } from "../alunos.service";
import { IFormCanDeactivate } from "../../guards/iform-candeactivate";


@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.css']
})
export class AlunoFormComponent implements OnInit, OnDestroy, IFormCanDeactivate {

  id: number;
  aluno: any;
  inscricao: Subscription;
  private formMudou: boolean = false;

  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private alunosService: AlunosService
  ) { }

  ngOnInit() {
    this.inscricao = this.route.params.subscribe((params: any) => {
      this.id = params['id'];

      this.aluno = this.alunosService.getAluno(this.id);

      if(this.aluno === null) {
        this.aluno = {};
      }
    });
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

  onInput(){
    this.formMudou = true;
  }

  podeMudarRota(): boolean {
    if(this.formMudou) {
      confirm('Tem certeza que deseja sair dessa página?');
    }

    return true;
  }

  podeDesativar(): boolean {
    return this.podeMudarRota();
  }
}
