import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EnderecoService } from '../endereco.service';

@Component({
  selector: 'app-form-e',
  templateUrl: './form-e.component.html',
  styleUrls: ['./form-e.component.scss']
})
export class FormEComponent implements OnInit {
// 1-) alocar a variável que vai ter os controles do form
meuFormE : FormGroup = new FormGroup({});
 // para saber se é edição
 isEdicao : boolean = false;

 // id de quem estou alterando
 id : number = -1;
  constructor(private formBuilder : FormBuilder, private enderecosService : EnderecoService,
              private router : Router, private activatedRouter : ActivatedRoute ) { }

  ngOnInit(): void {
    this.meuFormE = this.formBuilder.group({
      rua : [null, [Validators.required]],
      numero : [null, [Validators.required]],
      cep : [null, [Validators.required]],
      cidade : [null, [Validators.required]],
      estado : [null, [Validators.required]]
    });

    this.activatedRouter.params.subscribe((parametros : any)=>{
      console.log(parametros);
      if(parametros.id){
        console.log(`ediçao id ${parametros.id}`);
        this.isEdicao=true;
        this.id=parametros.id;

        this.enderecosService.getOne(parametros.id).subscribe(
          (dadosEnderecos)=>{
            console.log(dadosEnderecos);
            this.meuFormE.patchValue(dadosEnderecos);
        })
      } else{
        console.log(`criação`);
        this.isEdicao=false;
      }
    });
  }

  onSubmit(){
    if(this.isEdicao == false){
      // é para salvar o registro
      this.enderecosService.save(this.meuFormE.value)
        .subscribe(
          (data) => {
            console.log(data);
            // o navigate é para redirecionar para uma outra rota de interesse
            this.router.navigate(['/enderecos']);
          }
        );
    }
    // é alteração de algum registro
    else{
      this.enderecosService.update(this.id, this.meuFormE.value)
      .subscribe(
        (data) => {
          console.log(data);
          // o navigate é para redirecionar para uma outra rota de interesse
          this.router.navigate(['/enderecos']);
        }
      );
    }
  }//fim onSubmit
}
