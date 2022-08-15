import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IAluno } from '../models/Aluno';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

   public alunoForm: FormGroup;
   public titulo = "Alunos";
   public alunoSelecionado: IAluno | undefined;


   alunos = [
    {id:1, nome : "Al-1", sobrenome:"s-1", telefone:111.111},
    {id:2, nome : "Al-2", sobrenome:"s-2", telefone:222.222},
    {id:3, nome : "Al-3", sobrenome:"s-3", telefone:333.333},
   ];

   constructor(private fb: FormBuilder) {
    this.criarForm();
    }

   ngOnInit(): void {  }

   criarForm(){
    this.alunoForm = this.fb.group({
      nome: ['', Validators.required],
      sobrenome: ['', Validators.required],
      telefone:['', Validators.required]
    });
   }

   alunoSubmit(){
    console.log(this.alunoForm.value);
   }

   alunoSelect(aluno: IAluno){
    this.alunoSelecionado = aluno;
    this.alunoForm.patchValue(aluno);
    //o patchvalue vai atualizar todos os campos 
   }

   voltar(){
    this.alunoSelecionado = null;
   }



}
