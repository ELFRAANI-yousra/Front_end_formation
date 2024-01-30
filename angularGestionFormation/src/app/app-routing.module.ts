import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormationDetailleComponent } from './formation/detaille-inscp/formation-detaille/formation-detaille.component';
import{FormationComponent} from './formation/formation.component'
import{DetailleInscpComponent} from './formation/detaille-inscp/detaille-inscp.component'
import{IndividuInscreptionComponent}from './formation/individu-inscreption/individu-inscreption.component'
import{FourmateurExterneComponent}from './formation/fourmateur-externe/fourmateur-externe.component'

import{LoginComponent}from './login/login.component'
import{FormateurComponent}from './formateur/formateur.component'
import{FormationComponent as FormationComponentAdmin}from './admin/formation/formation.component' 
import{AddmodalComponent}from './admin/formation/addmodal/addmodal.component' 

import{EvaluationComponent}from './formation/evaluation/evaluation.component'

import{AccesEvaluationComponent}from './formation/acces-evaluation/acces-evaluation.component'
import{PlanificationComponent}from './admin/planification/planification.component'

const routes: Routes = [
{path: 'formation-detaille', component: FormationDetailleComponent},
{path: 'individu', component: IndividuInscreptionComponent},
{path: '', component: FormationComponent},
{path: 'individuDetail', component: DetailleInscpComponent},
{path: 'FourmateurExterne', component: FourmateurExterneComponent},


{path: 'login', component: LoginComponent},
{path: 'formateur', component: FormateurComponent},
{path: 'admin/formation', component: FormationComponentAdmin},
{path: 'test', component: AddmodalComponent},
{path: 'planification', component: PlanificationComponent},



{path: 'evaluation', component: EvaluationComponent},

{path: 'access/evaluation', component: AccesEvaluationComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
