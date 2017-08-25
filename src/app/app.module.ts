import { CursosService } from './service/cursos.service';
import { CursosModule } from './cursos/cursos.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MeuPrimeiroComponent } from './meu-primeiro/meu-primeiro.component';
import { MeuSegundoComponent } from './meu-segundo/meu-segundo.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { InputPropertyComponent } from './input-property/input-property.component';
import { OutputPropertyComponent } from './output-property/output-property.component';
import { CicloComponent } from './ciclo/ciclo.component';
import { DiretivaNgifComponent } from "./diretiva-ngif/diretiva-ngif.component";
import { DiretivaNgswitchComponent } from "./diretiva-ngswitch/diretiva-ngswitch.component";
import { FundoAmareloDirective } from "./shared/fundo-amarelo.directive";
import { DiretivasCustomizadasComponent } from "./diretivas-customizadas/diretivas-customizadas.component";
import { HighlightNouseDirective } from './shared/highlight-nouse.directive';
import { HighlightDirective } from './shared/highlight.directive';
import { NgElseDirective } from './shared/ng-else.directive';
import { ServiceComponent } from './service/service.component';

@NgModule({
  declarations: [
    AppComponent,
    MeuPrimeiroComponent,
    MeuSegundoComponent,
    DataBindingComponent,
    InputPropertyComponent,
    OutputPropertyComponent,
    CicloComponent,
    DiretivaNgifComponent,
    DiretivaNgswitchComponent,
    DiretivasCustomizadasComponent,
    FundoAmareloDirective,
    HighlightNouseDirective,
    HighlightDirective,
    NgElseDirective,
    ServiceComponent
  ],
  imports: [
    BrowserModule,
    CursosModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [CursosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
