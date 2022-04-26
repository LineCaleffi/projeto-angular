import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfessoresService {
  // httpClient é um serviço angular que permite acessar endereços REST (springTool - get/post/patch.....)
  constructor(private httpClient: HttpClient) { }

  getAll(){
    return this.httpClient.get('http://localhost:8080/professores')
  }
}
