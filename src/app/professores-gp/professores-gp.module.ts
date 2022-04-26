import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarGPComponent } from './listar-gp/listar-gp.component';
import { ProfessoresRoutingModule } from './professores-gp-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [
    ListarGPComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    ProfessoresRoutingModule,
    HttpClientModule,
    SharedModule
  ],
  exports:[
    ListarGPComponent
  ]
})
export class ProfessoresGpModule { }
