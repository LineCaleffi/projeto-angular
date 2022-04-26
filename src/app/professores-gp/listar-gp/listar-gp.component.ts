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
    this.professorGP.getAll().subscribe((data)=>{
      console.log(data);
      this.professores=data;
      }
    );

    this.activatedRoute.params.subscribe((data)=>{
      console.log(data);
      }
    );
  }

}
