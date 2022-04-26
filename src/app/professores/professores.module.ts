import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarComponent } from './listar/listar.component';
import { ProfessoresRoutingModule } from './professores-routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    ListarComponent
  ],
  imports: [
    CommonModule,
    ProfessoresRoutingModule,
    HttpClientModule
  ],
  exports:[
    ListarComponent
  ]
})
export class ProfessoresModule { }
