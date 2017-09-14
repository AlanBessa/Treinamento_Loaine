import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { MeuPrimeiroComponent } from './meu-primeiro/meu-primeiro.component';
import { MeuSegundoComponent } from './meu-segundo/meu-segundo.component';
import { CursosComponent } from "./cursos/cursos.component";
import { CursoDetalheComponent } from "./cursos/curso-detalhe/curso-detalhe.component";
import { NaoEncontradoComponent } from "./nao-encontrado/nao-encontrado.component";

const APP_ROUTES: Routes = [
    { path: 'segundo', component: MeuSegundoComponent },
    { path: 'cursos', component: CursosComponent },
    { path: 'curso/:id', component: CursoDetalheComponent },
    { path: 'naoEncontrado', component: NaoEncontradoComponent },
    { path: '', component: MeuPrimeiroComponent }    
]; 

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);