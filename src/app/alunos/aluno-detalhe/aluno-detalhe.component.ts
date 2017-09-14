import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from "rxjs/Rx";
import { ActivatedRoute, Router } from "@angular/router/src";
import { AlunosService } from "../alunos.service";

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.css']
})
export class AlunoDetalheComponent implements OnInit, OnDestroy {

  id: number;
  aluno: any;
  inscricao: Subscription;

  constructor(private route: ActivatedRoute, 
              private router: Router, 
              private alunosService: AlunosService) 
  { }

  ngOnInit() {
    this.inscricao = this.route.params.subscribe((params: any) => {
      this.id = params['id'];

      this.aluno = this.alunosService.getAluno(this.id);

      if(this.aluno == null) {
        this.router.navigate(['/naoEncontrado']);
      }
    });
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

}
