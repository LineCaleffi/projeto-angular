import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarEnderecoComponent } from './listar-endereco/listar-endereco.component';
import { EnderecoRoutingModule } from './endereco-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormEComponent } from './form-e/form-e.component';



@NgModule({
  declarations: [
    ListarEnderecoComponent,
    FormEComponent
  ],
  imports: [
    CommonModule,
    EnderecoRoutingModule,
    HttpClientModule
  ],
  exports: [
    ListarEnderecoComponent
  ]
})
export class EnderecoModule { }
