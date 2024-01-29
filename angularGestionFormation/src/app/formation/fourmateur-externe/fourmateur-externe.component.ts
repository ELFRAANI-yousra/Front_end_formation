import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-fourmateur-externe',
  templateUrl: './fourmateur-externe.component.html',
  styleUrls: ['./fourmateur-externe.component.css']
})
export class FourmateurExterneComponent {
  constructor(private fb: FormBuilder, private http: HttpClient) {
  }

  backEndURL = "http://localhost:8080/postuler";

  formFormateurExterne = this.fb.group({
    nom: [],
    prenom: [],
    dateNaissance: [],
    ville: [],
    email: [],
    telephone: [],
    motsCles: []
  });

  addfourmateurExterne() {
    console.log(this.formFormateurExterne.value);
    this.http.post(this.backEndURL, this.formFormateurExterne.value).subscribe(
      () => {
        // Success callback
        alert("Votre candidature a été soumise avec succès!"); // Show an alert
        this.redirectToHome(); // Redirect to home page
      },
      error => {
        // Handle error if needed
        console.error("Error submitting form:", error);
      }
    );
  }

  redirectToHome() {
    // Redirect to the home page (change the URL as needed)
    window.location.href = "";
  }
}