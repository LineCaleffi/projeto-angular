import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ReativoFormComponent } from './formularios/reativo-form/reativo-form.component';
import { FormComponent } from './professores-gp/form/form.component';import { ListarGPComponent } from './professores-gp/listar-gp/listar-gp.component';
import { ListarComponent } from './professores/listar/listar.component';

const routes: Routes = [
  {path: 'home', component: AppComponent},
  {path: 'formularios/reativo-form', component: ReativoFormComponent},
  {path: 'professores-gp', component: ListarGPComponent}

  // {path: 'professores', component: ListarComponent},
  // {path: 'professores/:id', component: ListarComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
