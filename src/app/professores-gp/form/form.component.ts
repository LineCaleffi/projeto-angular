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
  meuForm : FormGroup = new FormGroup({});

  constructor(private formBuilder : FormBuilder, private professorGP : ProfessoresGpService,
              private router : Router) { }

  ngOnInit(): void {
    this.meuForm=this.formBuilder.group({
      nome:[null,[Validators.required]],
      email:[null, [Validators.required]],
    });
  }

  onSubmit1(){
    console.log(this.meuForm.value);
    this.professorGP.save(this.meuForm.value).subscribe((data)=>{
      console.log(data);
      this.router.navigate(['/professores-gp']);
    });
  }
}
