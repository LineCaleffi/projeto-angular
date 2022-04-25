import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormulariosRoutingModule } from './formularios-routing.module';
import { ReativoFormComponent } from './reativo-form/reativo-form.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ReativoFormComponent
  ],
  imports: [
    CommonModule,
    FormulariosRoutingModule,
    ReactiveFormsModule
  ]
})
export class FormulariosModule { }
