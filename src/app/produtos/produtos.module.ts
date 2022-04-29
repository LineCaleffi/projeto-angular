import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarProdutosComponent } from './listar-produtos/listar-produtos.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import { ProdutosRoutingModule } from './produtos-routing.module';
import { ProdutosFormComponent } from './produtos-form/produtos-form.component';



@NgModule({
  declarations: [
    ListarProdutosComponent,
    ProdutosFormComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule,
    ProdutosRoutingModule
  ],
  exports:[
    ListarProdutosComponent
  ]
})
export class ProdutosModule { }
