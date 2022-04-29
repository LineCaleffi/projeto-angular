import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutosService } from '../produtos.service';

@Component({
  selector: 'app-produtos-form',
  templateUrl: './produtos-form.component.html',
  styleUrls: ['./produtos-form.component.scss']
})
export class ProdutosFormComponent implements OnInit {
  meuForm : FormGroup = new FormGroup({});

  isEdicao : boolean = false;
  id : number = -1;

  constructor(private formBuilder: FormBuilder,
              private produtoService: ProdutosService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.meuForm = this.formBuilder.group({
      nome:[null,[Validators.required]],
      descricao:[null,[Validators.required]],
      preco:[null,[Validators.required]]
    });

    this.activatedRoute.params.subscribe((parametros : any)=>{
      console.log(parametros);
      if(parametros.id){
        console.log(`edição id${parametros.id}`);
        this.isEdicao=true;
        this.id=parametros.id;

        this.produtoService.getOne(parametros.id).subscribe(
          (dadosProduto)=>{
            console.log(dadosProduto);
            this.meuForm.patchValue(dadosProduto);
          }
        )
      } else{
        console.log(`criação`);
        this.isEdicao=false;
      }
    })
  }

  onSubmit(){
    if(this.isEdicao == false){
      // é para salvar o registro
    this.produtoService.save(this.meuForm.value).subscribe(
      (data)=>{
        console.log(data);
        this.router.navigate(['/produtos']);
      });
   }else{
     this.produtoService.update(this.id, this.meuForm.value).subscribe(
       (data)=>{
         console.log(data);
         this.router.navigate(['/produtos']);
       }
     );
   }
  }
}
