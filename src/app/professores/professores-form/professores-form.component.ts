import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfessoresService } from '../professores.service';

@Component({
  selector: 'app-professor-form',
  templateUrl: './professores-form.component.html',
  styleUrls: ['./professores-form.component.scss']
})
export class ProfessoresFormComponent implements OnInit {
  // 1-) alocar a variável que vai ter os controles do form
  meuForm : FormGroup = new FormGroup({});

  // para saber se é edição
  isEdicao : boolean = false;

  // id de quem estou alterando
  id : number = -1;

  // 2-) injetar o FormBuilder para poder ajudar a criar os controles do form
  constructor(private formBuilder: FormBuilder,
              private professoresService: ProfessoresService,
              private router:Router,
              private activatedRoute: ActivatedRoute
            ) { }

  // 3-) alocar os controles na variável meuForm através do formBuilder
  ngOnInit(): void {
    this.meuForm = this.formBuilder.group({
      nome : [ null, [ Validators.required ] ],
      rua : [ null, [ Validators.required ] ],
      numero : [ null, [ Validators.required ] ],
      cep : [ null, [ Validators.required ] ]
    });

    // pegar parâmetros das rotas
    this.activatedRoute.params.subscribe((parametros : any) => {
          console.log(parametros);
          // se é EDIÇÃO
          if (parametros.id){
            console.log(`edição id ${parametros.id}`);
            this.isEdicao=true;
            this.id=parametros.id;
            // Preciso consultar a API para buscar todas as informações do ID a ser editado
            this.professoresService.getOne(parametros.id).subscribe(
              (dadosProfessores)=>{
                console.log(dadosProfessores);
                this.meuForm.patchValue(dadosProfessores); //passa um obj com os valores do formulário
            })
          }
          // se é CRIAÇÃO
          else {
            console.log(`criação`);
            this.isEdicao=false;
          }
        }
      );
  }// fim ngOnInit

  // 4-) integrar os controles do form no HTML
  onSubmit(){
    if(this.isEdicao == false){
      // é para salvar o registro
      this.professoresService.save(this.meuForm.value)
        .subscribe(
          (data) => {
            console.log(data);
            // o navigate é para redirecionar para uma outra rota de interesse
            this.router.navigate(['/professores']);
          }
        );
    }
    // é alteração de algum registro
    else{
      this.professoresService.update(this.id, this.meuForm.value)
      .subscribe(
        (data) => {
          console.log(data);
          // o navigate é para redirecionar para uma outra rota de interesse
          this.router.navigate(['/professores']);
        }
      );
    }
  }//fim onSubmit
}
