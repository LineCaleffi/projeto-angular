import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {

  @Input()
  empresaFilho : string = '';

  professores = [
    {id : 1, nome:"Aline", email:"aline.caleffi@nava.com.br"},
    {id : 2, nome:"Lola", email:"lola@nava.com.br"}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
