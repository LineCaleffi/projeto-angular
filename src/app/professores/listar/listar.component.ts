import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfessoresModel } from '../professores.model';
import { ProfessoresService } from '../professores.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {

  professores : ProfessoresModel[] = [];

  //private activatedRoute : ActivatedRoute
   // modificador de acesso, nome da variável e Classe do objeto a ser injetado
  constructor(private activatedRoute: ActivatedRoute, private professoresService: ProfessoresService) {
   // this.activatedRoute = new ActivatedRoute();
  }

  ngOnInit(): void {
     //pega os dados do BD
    this.getAll();

    this.activatedRoute.params.subscribe(
      (data) => {
        console.log(data);
      }
    );
  }

  // Deleta do banco de dados
  onDelete(id: number){
    this.professoresService.delete(id)
      .subscribe(
        ()=>{
          console.log(`deletou registro com id ${id}`);
           // retorna os dados do BD
          this.getAll();
        }
      );
  }

  //pega os dados do BD
  private getAll(){
    this.professoresService.getAll()
    .subscribe(
      (data) => {
        console.log(data);
        this.professores = data;
      }
    );
  }
}
