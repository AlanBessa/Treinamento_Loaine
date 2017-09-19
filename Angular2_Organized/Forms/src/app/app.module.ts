import { TemplateFormModule } from './template-form/template-form.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DataFormModule } from './data-form/data-form.module';

@NgModule({
  declarations: [
    AppComponent  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    TemplateFormModule,
    DataFormModule,
    AppRoutingModule, 
    BsDropdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
