import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AlunosComponent } from './alunos/alunos.component';
import { PerfilComponent } from './perfil/perfil.component';
import { ProfessoresComponent } from './professores/professores.component';

const routes: Routes = [
  {path : "" , redirectTo:'dashboard', pathMatch:'full' },
  {path : "dashboard" , component: DashboardComponent }, 
  {path : "perfil" , component: PerfilComponent }, 
  {path : "professores" , component: ProfessoresComponent},
  {path : "alunos" , component: AlunosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
