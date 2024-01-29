import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormationDetailleComponent } from './formation/detaille-inscp/formation-detaille/formation-detaille.component';
import { FormationComponent } from './formation/formation.component';
import { MenuComponent } from './formation/menu/menu.component';
import { ListeFormationComponent } from './formation/liste-formation/liste-formation.component';
import { CategoriesMenuComponent } from './formation/categories-menu/categories-menu.component';
import{HttpClientModule} from '@angular/common/http';
import { IndividuInscreptionComponent } from './formation/individu-inscreption/individu-inscreption.component';
import { FourmateurExterneComponent } from './formation/fourmateur-externe/fourmateur-externe.component';
<<<<<<< HEAD
import { LoginComponent } from './login/login.component';
import { FormateurComponent } from './formateur/formateur.component';
import { AdminComponent } from './admin/admin.component'
import{FormationComponent as FormationComponentADmin} from './admin/formation/formation.component';
import { AddmodalComponent } from './admin/formation/addmodal/addmodal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { NgxMatDatetimePickerModule, NgxMatTimepickerModule } from '@angular-material-components/datetime-picker';






=======
import { EvaluationComponent } from './formation/evaluation/evaluation.component';
import { AccesEvaluationComponent } from './formation/acces-evaluation/acces-evaluation.component';
>>>>>>> 9ed73c52a0c50f9e30d0863597e552777702a00a

@NgModule({
  declarations: [
    AppComponent,
    FormationComponent,
    MenuComponent,
    ListeFormationComponent,
    CategoriesMenuComponent,
    IndividuInscreptionComponent,
    FormationDetailleComponent,
    FourmateurExterneComponent,
<<<<<<< HEAD
    LoginComponent,
    FormateurComponent,
    AdminComponent,
    FormationComponentADmin,
    AddmodalComponent,
  
=======
    EvaluationComponent,
    AccesEvaluationComponent,
    


>>>>>>> 9ed73c52a0c50f9e30d0863597e552777702a00a
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
<<<<<<< HEAD
    NgbModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    NgxMatDatetimePickerModule,
    NgxMatTimepickerModule,
     
=======
   
>>>>>>> 9ed73c52a0c50f9e30d0863597e552777702a00a
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
