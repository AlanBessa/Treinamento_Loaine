import { Subscription } from 'rxjs/Rx';
import { CursosService } from './../service/cursos.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  nomePortal = 'http://loiane.training';

  cursos: string[];
  cursosArray: any[];

  pagina: number;
  inscricao: Subscription;

  constructor(private route: ActivatedRoute, private cursosService: CursosService) {
    this.cursos = cursosService.getCursos();
  }

  ngOnInit() {
    this.cursosArray = this.cursosService.obterCursos();

    this.inscricao = this.route.queryParams.subscribe((queryParams: any) => {
      this.pagina = queryParams['pagina'];

    });
  }

  ngDestroy() {
    this.inscricao.unsubscribe();
  }
}
