import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormationDetailleComponent } from './formation/detaille-inscp/formation-detaille/formation-detaille.component';
import{FormationComponent} from './formation/formation.component'
import{DetailleInscpComponent} from './formation/detaille-inscp/detaille-inscp.component'
import{IndividuInscreptionComponent}from './formation/individu-inscreption/individu-inscreption.component'
import{FourmateurExterneComponent}from './formation/fourmateur-externe/fourmateur-externe.component'
import{EvaluationComponent}from './formation/evaluation/evaluation.component'
import{AccesEvaluationComponent}from './formation/acces-evaluation/acces-evaluation.component'
const routes: Routes = [
  {path: 'formation-detaille', component: FormationDetailleComponent},
{path: 'individu', component: IndividuInscreptionComponent},
{path: '', component: FormationComponent},
{path: 'individuDetail', component: DetailleInscpComponent},
{path: 'FourmateurExterne', component: FourmateurExterneComponent},
{path: 'evaluation', component: EvaluationComponent},
{path: 'access/evaluation', component: AccesEvaluationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
