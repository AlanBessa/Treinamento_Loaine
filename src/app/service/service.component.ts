import { Component, OnInit } from '@angular/core';

import { CursosService } from './cursos.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  cursos: string[] = [];

  //cursosService: CursosService;

  /*
  constructor(_cursosService: CursosService) { 
    this.cursosService = _cursosService;
  }
  */

  constructor(private cursosService: CursosService) {  }

  ngOnInit() {
    this.cursos = this.cursosService.getCursos();
  }

}
