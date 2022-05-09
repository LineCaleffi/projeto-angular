import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarComponent } from './listar/listar.component';
import { ProfessoresRoutingModule } from './professores-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ProfessoresFormComponent } from './professores-form/professores-form.component';
import { SharedModule } from '../shared/shared.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    ListarComponent,
    ProfessoresFormComponent
  ],
  imports: [
    CommonModule,
    ProfessoresRoutingModule,
    HttpClientModule,
    SharedModule,
    BrowserAnimationsModule,
  ],
  exports:[
    ListarComponent
  ]
})
export class ProfessoresModule { }
