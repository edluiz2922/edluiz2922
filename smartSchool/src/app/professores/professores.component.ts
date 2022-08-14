import { Component, OnInit } from '@angular/core';
import { IProfessor } from '../models/Professor';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {

  public titulo = "Professores";
  public professorSelecionado: IProfessor | undefined;
 
  professores = [
   {id:1, nome : "Prof_01", disciplina:"Matemática"},
   {id:2, nome : "Prof_02", disciplina:"Fisica"},
   {id:3, nome : "Prof_03", disciplina:"Portugues"},
  ];

  profSelect(professor: IProfessor){
    this.professorSelecionado = professor;
   }

   voltar(){
   this.professorSelecionado = null ;
   }

  constructor() { }

  ngOnInit(): void {
  }
}
