import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnderecoService {


  constructor(private httpClient : HttpClient) { }

  getAll(){
    return this.httpClient.get('http://localhost:8080/enderecos');
  }

  save(obj : any){
    return this.httpClient.post('http://localhost:8080/enderecos', obj);
  }

  update(id:number,obj : any){
    return this.httpClient.patch(`http://localhost:8080/enderecos/${id}`, obj);
  }

  getOne(id : number){
    return this.httpClient.get(`http://localhost:8080/enderecos/${id}`);
  }

  delete(id : number){
    return this.httpClient.delete(`http://localhost:8080/enderecos/${id}`)
  }
}
