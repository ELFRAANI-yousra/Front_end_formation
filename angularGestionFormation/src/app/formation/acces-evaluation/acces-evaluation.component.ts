import { Component } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { EvaluationServiceService } from './evaluation-service.service';
import { Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-acces-evaluation',
  templateUrl: './acces-evaluation.component.html',
  styleUrls: ['./acces-evaluation.component.css'],
})
export class AccesEvaluationComponent {
  constructor(private fb: FormBuilder, private router: Router, private http: HttpClient, private evaluationServiceService: EvaluationServiceService) { }

  individu: any;
  url = "http://localhost:8080/evaluer/";

  myForm = this.fb.group({
    code: []
  });

  onSubmit() {
    const aa = this.myForm.get('code')?.value;
    console.log('Value submitted:', aa);

    const uurl = this.url + aa;
    this.http.get(uurl).subscribe(data => {
      
      this.individu = data;

      if (this.individu == null) {
        alert('code est incorrect '); // Show an alert
        this.redirectToHome();
        console.log('Individu is null');
      } else {
        this.evaluationServiceService.setIndividuData(this.individu);
        this.router.navigate(['/evaluation']); 
      }
    });
  }
  redirectToHome() {
    // Redirect to the home page (change the URL as needed)
    window.location.href = '';
  }
}
