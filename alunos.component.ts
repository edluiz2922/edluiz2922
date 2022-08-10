import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

   public titulo = "Alunos";
   public alunoSelecionado: string | undefined;
   /*
    public alunos  = [
      "Marta",
      "Rui",
      "João",   
    ]; */

   alunos = [
    {id:1, nome : "Al-1", sobrenome:"s-1", telefone:111.111},
    {id:2, nome : "Al-2", sobrenome:"s-2", telefone:222.222},
    {id:3, nome : "Al-3", sobrenome:"s-3", telefone:333.333},
   ];

   alunoSelect(aluno:any){
    this.alunoSelecionado = aluno.nome;
   }

   voltar(){
    this.alunoSelecionado = '';
   }

  constructor() { }

  ngOnInit(): void {
  }

}
