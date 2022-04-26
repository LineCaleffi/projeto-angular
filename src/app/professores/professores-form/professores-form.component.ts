import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-professores-form',
  templateUrl: './professores-form.component.html',
  styleUrls: ['./professores-form.component.scss']
})
export class ProfessoresFormComponent implements OnInit {
 // 1-) alocar a variável que vai ter os controles do form
  meuForm:FormGroup = new FormGroup({});

  // 2-) injetar o FormBuilder para poder ajudar a criar os controles do form
  constructor(private formBuilder : FormBuilder) { }

  // 3-) alocar os controles na variável meuForm através do formBuilder
  ngOnInit(): void {
    this.meuForm = this.formBuilder.group({
      nome:[null, [Validators.required]],
      rua:[null, [Validators.required]],
      numero:[null, [Validators.required]],
      cep:[null, [Validators.required]]
    });
  }

}
