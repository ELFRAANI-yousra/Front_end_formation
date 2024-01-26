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
import { FourmateurExterneComponent } from './formation/fourmateur-externe/fourmateur-externe.component'

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
    


  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
