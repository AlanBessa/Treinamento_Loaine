import { Injectable } from '@angular/core';

@Injectable()
export class CursosService {

  constructor() { }

  getCursos() {
    return ['C#', 'Ext JS', 'Angular'];
  }

  obterCursos() {
    return [
      {id: 1 , nome: 'Angular 2'},
      {id: 2 , nome: 'Java'}
    ];
  }

  obterCurso(id: number) {
    let cursos = this.obterCursos();
    for(let i = 0; i < cursos.length; i++) {
      let curso = cursos[i];
      if(curso.id == id) {
        return curso;
      }
    }

    return null;
  }
}
