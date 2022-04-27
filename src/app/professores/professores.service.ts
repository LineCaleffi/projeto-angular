import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { ProfessoresModel } from './professores.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfessoresService {
  // httpClient é um serviço angular que permite acessar endereços REST (springTool - get/post/patch.....)
  constructor(private httpClient: HttpClient) { }

  // mostra todos os professores salvos no Banco de Dados
  getAll(){
    return this.httpClient.get<ProfessoresModel[]>(`${environment.api_url}/professores`)
  }

  // Salva novos dados no BD
  save(professorObj: ProfessoresModel){
    return this.httpClient.post<ProfessoresModel>(`${environment.api_url}/professores`, professorObj);
  }

  // Deleta do banco de dados
  delete(id : number){
    return this.httpClient.delete(`${environment.api_url}/professores/${id}`);
  }

  getOne(id : number){
    return this.httpClient.get<ProfessoresModel>(`${environment.api_url}/professores/${id}`);
  }

  // editar
  update(id:number, professorObj: ProfessoresModel){
    return this.httpClient.patch<ProfessoresModel>(`${environment.api_url}/professores/${id}`, professorObj);
  }
}
