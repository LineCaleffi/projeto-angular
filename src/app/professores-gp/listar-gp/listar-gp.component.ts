import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfessoresGpService } from '../professores-gp.service';

@Component({
  selector: 'app-listar-gp',
  templateUrl: './listar-gp.component.html',
  styleUrls: ['./listar-gp.component.scss']
})
export class ListarGPComponent implements OnInit {

  // CRIA UM ARRAY VAZIO
  professores : any = [];

  constructor(private activatedRoute : ActivatedRoute, private professorGP : ProfessoresGpService) { }

  // PEGA OS DADOS DO BANCO DE DADOS
  ngOnInit(): void {
    this.getAll();

    this.activatedRoute.params.subscribe((data)=>{
      console.log(data);
      }
    );
  }

  onDelete(id : number){
    this.professorGP.delete(id).subscribe(()=>{
      console.log(`deletou o registro com id ${id}`);
      this.getAll();
    })
  }

  private getAll(){
    this.professorGP.getAll().subscribe((data)=>{
      console.log(data);
      this.professores=data;
      }
    );
  }
}
