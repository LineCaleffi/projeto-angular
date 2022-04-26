import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfessoresService {
  // httpClient é um serviço angular que permite acessar endereços REST (springTool - get/post/patch.....)
  constructor(private httpClient: HttpClient) { }

  // mostra todos os professores salvos no Banco de Dados
  getAll(){
    return this.httpClient.get('http://localhost:8080/professores')
  }

  // Salva novos dados no BD
  save(professorObj: any){
    return this.httpClient.post('http://localhost:8080/professores', professorObj);
  }
}
