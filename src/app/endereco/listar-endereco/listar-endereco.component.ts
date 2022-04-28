import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Action } from 'rxjs/internal/scheduler/Action';
import { EnderecoService } from '../endereco.service';

@Component({
  selector: 'app-listar-endereco',
  templateUrl: './listar-endereco.component.html',
  styleUrls: ['./listar-endereco.component.scss']
})
export class ListarEnderecoComponent implements OnInit {

  enderecos : any = [];

  constructor(private activatedRoute : ActivatedRoute,
              private enderecoService : EnderecoService) { }

  ngOnInit(): void {
    this.getAll();

    this.activatedRoute.params.subscribe((data)=>{
      console.log(data);
    })
  }

  private getAll(){
    this.enderecoService.getAll().subscribe((data)=>{
      console.log(data);
      this.enderecos = data;
    })
  }

  onDelete(id: number){
    this.enderecoService.delete(id).subscribe(()=>{
      console.log(`deletou registro com id ${id}`);
      this.getAll();
    });
  }
}
