import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormDebugComponent } from './form-debug/form-debug.component';
import { InputTextoComponent } from './input-texto/input-texto.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    FormDebugComponent,
    InputTextoComponent
  ],
  declarations: [
    FormDebugComponent,
    InputTextoComponent
  ]
})
export class SharedModule { }
