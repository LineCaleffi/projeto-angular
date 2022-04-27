import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormEComponent } from './form-e/form-e.component';
import { ListarEnderecoComponent } from './listar-endereco/listar-endereco.component';
// É necessário colocar nesse arquivo a rota que ira aparecer na tela
const routes: Routes = [
  // Ao clicar no botão 'professores' mostra a lista de professores (listar-gp.component.html)
  {path: 'enderecos', component: ListarEnderecoComponent},
  {path: 'enderecos/criar', component: FormEComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnderecoRoutingModule { }
