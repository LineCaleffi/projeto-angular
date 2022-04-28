import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarEnderecoComponent } from './listar-endereco/listar-endereco.component';
import { EnderecoRoutingModule } from './endereco-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormEComponent } from './form-e/form-e.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ListarEnderecoComponent,
    FormEComponent
  ],
  imports: [
    CommonModule,
    EnderecoRoutingModule,
    HttpClientModule,
    SharedModule
  ],
  exports: [
    ListarEnderecoComponent
  ]
})
export class EnderecoModule { }
