import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-fourmateur-externe',
  templateUrl: './fourmateur-externe.component.html',
  styleUrls: ['./fourmateur-externe.component.css']
})

export class FourmateurExterneComponent 
{

  constructor(private modalService: NgbModal,private fb: FormBuilder, private http: HttpClient) {}

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

  addfourmateurExterne(formation:any)
  {
    console.log(this.formFormateurExterne.value);
    this.http.post(this.backEndURL, this.formFormateurExterne.value).subscribe(
      () => {
        this.openSuccessModal(formation);
      },
      error => {
        console.error("Error submitting form:", error);
      }
    );
  }

  redirectToHome() {
    window.location.href = "";
  }

  openSuccessModal(formation:any)
  {
    const modalRef: NgbModalRef = this.modalService.open(formation, { centered: true });
    modalRef.result.then(
      (result) => {
        console.log('Modal closed:', result);
        this.redirectToHome();
      },
      (reason) => {
        console.log('Modal dismissed:', reason);
        this.redirectToHome();
      }
    );
  }
}