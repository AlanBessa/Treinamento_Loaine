import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { CursoFormComponent } from "./curso-form/curso-form.component";
import { CursoNaoEncontradoComponent } from "./curso-nao-encontrado/curso-nao-encontrado.component";
import { CursoDetalheComponent } from "./curso-detalhe/curso-detalhe.component";
import { CursosComponent } from "./cursos.component";

import { CursosService } from "./cursos.service";
import { CursosRoutingModule } from "./cursos.routing.module";

@NgModule({
  imports: [
    CommonModule,
    CursosRoutingModule
  ],
  declarations: [
    CursosComponent,
    CursoDetalheComponent,
    CursoNaoEncontradoComponent,
    CursoFormComponent
  ],
  providers: [
    CursosService
  ]
})
export class CursosModule { }
