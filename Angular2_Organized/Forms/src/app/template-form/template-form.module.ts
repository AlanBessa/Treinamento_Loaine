import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

import { TemplateFormComponent } from "./template-form.component";
import { FormDebugComponent } from "../form-debug/form-debug.component";
import { InputTextoComponent } from './input-texto/input-texto.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule
  ],
  declarations: [
    TemplateFormComponent,
    FormDebugComponent,
    InputTextoComponent
  ]
})
export class TemplateFormModule { }
