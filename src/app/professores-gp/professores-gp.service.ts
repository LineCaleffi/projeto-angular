import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfessoresGpService {

  constructor(private httpClient: HttpClient) { }

  // GET na API da grande porte
  getAll(){
    return this.httpClient.get('http://cursos.grandeporte.com.br:8080/professores');
  }

  // POST na API da grande porte
  save(professorObj: any){
    return this.httpClient.post('http://cursos.grandeporte.com.br:8080/professores', professorObj);
  }
}
