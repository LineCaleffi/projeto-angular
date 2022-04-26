import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
//import { ProfessoresFormComponent } from '../professores/professores-form/professores-form.component';
import { ListarGPComponent } from './listar-gp/listar-gp.component';

// É necessário colocar nesse arquivo a rota que ira aparecer na tela
const routes: Routes = [
  // Ao clicar no botão 'professores' mostra a lista de professores (listar-gp.component.html)
  {path: 'professores', component: ListarGPComponent},
  // Ao clicar no botão 'criar' mosta o formulário (form.component.html)
  {path: 'professores-gp/criar', component: FormComponent},
  {path: 'professores/:id', component: ListarGPComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfessoresRoutingModule { }
