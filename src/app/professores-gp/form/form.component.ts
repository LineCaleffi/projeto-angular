import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProfessoresGpService } from '../professores-gp.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  // 1-) alocar a variável que vai ter os controles do form
  meuForm : FormGroup = new FormGroup({});

  // 2-) injetar o FormBuilder para poder ajudar a criar os controles do form
  constructor(private formBuilder : FormBuilder, private professorGP : ProfessoresGpService,
              private router : Router) { }

              // 3-) alocar os controles na variável meuForm através do formBuilder
  ngOnInit(): void {
    this.meuForm=this.formBuilder.group({
      nome:[null,[Validators.required]],
      email:[null, [Validators.required]],
    });
  }

  // 4-) integrar os controles do form no HTML
  // Salva novos dados no BD
  onSubmit1(){
    console.log(this.meuForm.value);
    this.professorGP.save(this.meuForm.value).subscribe((data)=>{
      console.log(data);
      // o navigate é para redirecionar para uma outra rota de interesse após salva
      this.router.navigate(['/professores-gp']);
    });
  }
}
