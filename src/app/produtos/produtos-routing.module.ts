import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarProdutosComponent } from './listar-produtos/listar-produtos.component';
import { ProdutosFormComponent } from './produtos-form/produtos-form.component';

const routes: Routes = [
  {path: 'produtos', component: ListarProdutosComponent},
  {path: 'produtos/criar', component: ProdutosFormComponent},
  {path: 'produtos/:id', component: ListarProdutosComponent},
  {path: 'produtos/editar/:id', component: ProdutosFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutosRoutingModule { }
