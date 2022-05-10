import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProfessoresGpModule } from './professores-gp.module';

@Injectable({
  providedIn: 'root'
})
export class ProfessoresGpService {

  constructor(private httpClient: HttpClient) { }

  // GET na API da grande porte
  getAll(){
    return this.httpClient.get('http://cursos.grandeporte.com.br:8080/professores');
  }

  getOne(id:number){
    return this.httpClient.get(`http://cursos.grandeporte.com.br:8080/professores/${id}`);
  }

  // POST na API da grande porte
  save(professorObj: any){
    return this.httpClient.post('http://cursos.grandeporte.com.br:8080/professores', professorObj);
  }

  // Deleta do banco de dados
  delete(id: any){
    return this.httpClient.delete(`http://cursos.grandeporte.com.br:8080/professores/${id}`);
  }

  // editar
  update(id:number, professorObj: any){
    return this.httpClient.patch(`http://cursos.grandeporte.com.br:8080/professores/${id}`, professorObj);
  }
}
