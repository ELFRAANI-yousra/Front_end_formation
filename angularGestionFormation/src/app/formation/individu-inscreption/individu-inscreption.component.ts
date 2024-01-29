import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormationDetailServiceService } from '../liste-formation/formation-detail.service.service';

@Component({
  selector: 'app-individu-inscreption',
  templateUrl: './individu-inscreption.component.html',
  styleUrls: ['./individu-inscreption.component.css']
})
export class IndividuInscreptionComponent {
  selectedFormation: any = null;

  constructor(private fb: FormBuilder, private http: HttpClient, private formationDetailServiceService: FormationDetailServiceService) {
    this.selectedFormation = this.formationDetailServiceService.getSelectedFormation();
  }

  backEndURL = "http://localhost:8080/rejoindre";

  formIndividu = this.fb.group({
    nom: [],
    prenom: [],
    dateNaissance: [],
    ville: [],
    email: [],
    telephone: [],
    formation:[]
  });

  addIndividu() {
    console.log(this.formIndividu.value);
    this.formIndividu.patchValue({formation:this.selectedFormation});
    
    this.http.post(this.backEndURL, this.formIndividu.value).subscribe(
    () => {
      // Success callback
      alert("Votre inscreption a été soumise avec succès!"); // Show an alert
      this.redirectToHome(); // Redirect to home page
    },
    error => {
      // Handle error if needed
      console.error("Error inscreption form:", error);
    }
  );
}

redirectToHome() {
  // Redirect to the home page (change the URL as needed)
  window.location.href = "";
};
}

