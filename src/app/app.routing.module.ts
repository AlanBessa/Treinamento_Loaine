import { NgModule } from '@angular/core';
import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { MeuPrimeiroComponent } from './meu-primeiro/meu-primeiro.component';
import { MeuSegundoComponent } from './meu-segundo/meu-segundo.component';
//import { CursosComponent } from "./cursos/cursos.component";
//import { CursoDetalheComponent } from "./cursos/curso-detalhe/curso-detalhe.component";
import { NaoEncontradoComponent } from "./nao-encontrado/nao-encontrado.component";

const appRoutes: Routes = [
    { path: 'segundo', component: MeuSegundoComponent },
    /*{ path: 'cursos', component: CursosComponent },
    { path: 'curso/:id', component: CursoDetalheComponent },*/
    { path: 'naoEncontrado', component: NaoEncontradoComponent },
    { path: '', component: MeuPrimeiroComponent }    
]; 

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {
    
}