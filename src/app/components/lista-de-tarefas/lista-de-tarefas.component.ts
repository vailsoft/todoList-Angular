import { Component, OnInit } from '@angular/core';
import { Tarefa, Prioridade } from 'src/app/models/Tarefa';

@Component({
  selector: 'app-lista-de-tarefas',
  templateUrl: './lista-de-tarefas.component.html',
  styleUrls: ['./lista-de-tarefas.component.css']
})
export class ListaDeTarefasComponent implements OnInit {

  tarefas:Tarefa[] = [
    {
      id:"abc",
      texto: "Dar comida ao gato",
      feita: false,
      prioridade:Prioridade.Alta
    }, {
      id:"abcd",
      texto: "Fazer esse projeto",
      feita: false,
      prioridade:Prioridade.Alta
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
