import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { DropdownService } from './services/dropdown.service';

import { FormDebugComponent } from './form-debug/form-debug.component';
import { InputTextoComponent } from './input-texto/input-texto.component';

@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ],
  exports: [
    FormDebugComponent,
    InputTextoComponent
  ],
  declarations: [
    FormDebugComponent,
    InputTextoComponent
  ],
  providers: [DropdownService]
})
export class SharedModule { }
