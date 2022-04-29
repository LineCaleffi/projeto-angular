import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormulariosModule } from './formularios/formularios.module';
import { ProfessoresModule } from './professores/professores.module';
import { ProfessoresGpModule } from './professores-gp/professores-gp.module';
import { EnderecoModule } from './endereco/endereco.module';
import { ProdutosModule } from './produtos/produtos.module';
import { UsuariosModule } from './usuarios/usuarios.module';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ProfessoresModule,
    FormulariosModule,
    ProfessoresGpModule,
    EnderecoModule,
    ProdutosModule,
    UsuariosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
