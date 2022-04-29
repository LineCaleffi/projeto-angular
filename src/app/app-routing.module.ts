import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ListarEnderecoComponent } from './endereco/listar-endereco/listar-endereco.component';
import { ReativoFormComponent } from './formularios/reativo-form/reativo-form.component';
import { ListarProdutosComponent } from './produtos/listar-produtos/listar-produtos.component';
import { ListarGPComponent } from './professores-gp/listar-gp/listar-gp.component';
import { ListarUsuariosComponent } from './usuarios/listar-usuarios/listar-usuarios.component';

const routes: Routes = [
  {path: 'home', component: AppComponent},
  {path: 'formularios/reativo-form', component: ReativoFormComponent},
  {path: 'professores-gp', component: ListarGPComponent},
  {path: 'enderecos', component: ListarEnderecoComponent},
  {path: 'produtos', component: ListarProdutosComponent},
  {path: 'usuarios', component: ListarUsuariosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
