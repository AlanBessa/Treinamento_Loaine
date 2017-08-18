import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  valor: number = 5;

  deletarCiclo: boolean = false;

  public mudarValor() {
    this.valor++;
  }

  public destruirCiclo() {
    this.deletarCiclo = true;
  }
}
