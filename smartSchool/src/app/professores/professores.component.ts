import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {

  public titulo = "Professores";
  public profSelecionado: string | undefined;
 
  professores = [
   {id:1, nome : "Prof_01", disciplina:"Matemática"},
   {id:2, nome : "Prof_02", disciplina:"Fisica"},
   {id:3, nome : "Prof_03", disciplina:"Portugues"},
  ]

  profSelect(prof:any){
    this.profSelecionado = prof.nome;
   }

   voltar(){
    this.profSelecionado = '';
   }

  constructor() { }

  ngOnInit(): void {
  }
}
