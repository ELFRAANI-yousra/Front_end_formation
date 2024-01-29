import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EvaluationServiceService } from '../acces-evaluation/evaluation-service.service';

@Component({
  selector: 'app-evaluation',
  templateUrl: './evaluation.component.html',
  styleUrls: ['./evaluation.component.css'],
})
export class EvaluationComponent {
  PedagogicalNote: number = 0;
  NoteRythme: number = 0;
  NoteSupport: number = 0;
  NoteMaitrise: number = 0;
  individu: any;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private evaluationServiceService: EvaluationServiceService
  ) {}
  
  backEndURL1 = 'http://localhost:8080/evaluation';
  backEndURL2 = 'http://localhost:8080/rejoindre/evaluer';
  formEvaluation = this.fb.group({
    notePedagogique: [0],
    noteRythme: [0],
    noteSupportCoursTP: [0],
    noteMaitriseSujet: [0],
    planification: [null],
    individu: [null],
  });


  stars: number[] = [1, 2, 3, 4, 5];

  captureRatings() {

    const id=this.individu.id;
    console.log(id);
    this.http.post(this.backEndURL2,id).subscribe()
    
    this.formEvaluation.patchValue({ notePedagogique: this.PedagogicalNote });
    this.formEvaluation.patchValue({ noteRythme: this.NoteRythme });
    this.formEvaluation.patchValue({ noteSupportCoursTP: this.NoteSupport });
    this.formEvaluation.patchValue({ noteMaitriseSujet: this.NoteMaitrise });
    this.formEvaluation.patchValue({ planification: this.individu.planification });
    this.formEvaluation.patchValue({ individu: this.individu });

    console.log(this.formEvaluation.value);
    
    this.http.post(this.backEndURL1, this.formEvaluation.value).subscribe(
      () => {
        // Success callback
        alert('Votre évaluation a été soumise avec succès!'); // Show an alert
        this.redirectToHome(); // Redirect to home page
      },
      (error) => {
        // Handle error if needed
        console.error('Error evaluation form:', error);
      }
    );
  }

  ngOnInit(): void {
    // Subscribe to the route parameters
    this.individu = this.evaluationServiceService.getIndividuData();
    console.log('Individu in EvaluationComponent:', this.individu);
  }

  redirectToHome() {
    // Redirect to the home page (change the URL as needed)
    window.location.href = '';
  }

  setRating(rating: number, category: string): void {
    switch (category) {
      case 'PedagogicalNote':
        this.PedagogicalNote = rating;
        break;
      case 'NoteRythme':
        this.NoteRythme = rating;
        break;
      case 'NoteSupport':
        this.NoteSupport = rating;
        break;
      case 'NoteMaitrise':
        this.NoteMaitrise = rating;
        break;
      default:
        break;
    }
  }
}
