import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-mostrar-mensagem',
  templateUrl: './mostrar-mensagem.component.html',
  styleUrls: ['./mostrar-mensagem.component.scss']
})
export class MostrarMensagemComponent implements OnInit {

  @Input()
  controles : any;

  constructor() { }

  ngOnInit(): void {
  }

}
