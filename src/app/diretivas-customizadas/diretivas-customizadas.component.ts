import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-diretivas-customizadas',
    templateUrl: 'diretivas-customizadas.component.html'
})
export class DiretivasCustomizadasComponent implements OnInit {

    mostrarCursos: boolean = false;

    constructor() { }

    ngOnInit() {

    }

    onMostrarCursos() {
        this.mostrarCursos = !this.mostrarCursos;
    }

}