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
}
