import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarComponent } from './listar/listar.component';
import { ProfessoresFormComponent } from './professores-form/professores-form.component';

const routes: Routes = [
  {path: 'professores', component: ListarComponent},
  {path: 'professores/criar', component: ProfessoresFormComponent},
  //{path: 'professores/:id', component: ListarComponent},
  {path: 'professores/editar/:id', component: ProfessoresFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfessoresRoutingModule { }
