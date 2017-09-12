import { CursosService } from './../service/cursos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  nomePortal = 'http://loiane.training';

  cursos: string[];
  cursosArray: any[];

  constructor(private cursosService: CursosService) {
    this.cursos = cursosService.getCursos();
  }

  ngOnInit() {
    this.cursosArray = this.cursosService.obterCursos();
  }

}
