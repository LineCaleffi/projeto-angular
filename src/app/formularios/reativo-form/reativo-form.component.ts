import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reativo-form',
  templateUrl: './reativo-form.component.html',
  styleUrls: ['./reativo-form.component.scss']
})
export class ReativoFormComponent implements OnInit {

  // inicializando a váriavle meuForm com um objeto com controles vazios -> {}
  meuForm: FormGroup = new FormGroup({});

  // FormBuilder é um serviço utilizado para ajudar a criar os mecanismos de controles do formulário
  constructor(private formBuilder : FormBuilder) { }

  ngOnInit(): void {
  }

}
