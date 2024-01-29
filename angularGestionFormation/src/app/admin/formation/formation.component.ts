import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Component, inject, TemplateRef } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css']
})
export class FormationComponent 
{

  formations: any[] = [];
  formateurs:any[]=[];
  entreprises:any[]=[];
  
  newFormation: any = {
    categorie: '',
    titre: '',
    nombreHeures: 0,
    cout: 0,
    objectifs: '',
    programmeDetaille: ''
  };
 
  private Url = 'http://localhost:8080/formation';
  private modalService = inject(NgbModal);
  private token: string = ""; 
  closeResult = '';
  selectedFormation: any = {};
  selectedformateur:any={};
  selectedentreprise:any={};
  ville:string = "";
  planificationId: number=0;
  selectedDates: Date[] = [];


  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // Fetch the token from local storage when the component initializes
    this.token = localStorage.getItem('token') ?? ''; // Provide an empty string as default value
    this.fetchFormations();
    this.fetchFormateur();
    this.fetchentreprise();
  }

  fetchentreprise(): void {
    // Define the headers with the token
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}` // Include the token in the 'Authorization' header
    });
    
    // Pass the headers in the HTTP request
    this.getMesFormations(headers,'http://localhost:8080/entreprise').subscribe(
      (entreprise: any[]) => {  
        this.entreprises = entreprise;
        console.log(entreprise)     
      },
      (error: HttpErrorResponse) => {  // Define the type of 'error' as 'HttpErrorResponse'
        console.error('Error fetching entreprises:', error);
      }
    );
  }

  fetchFormateur(): void {
    // Define the headers with the token
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}` // Include the token in the 'Authorization' header
    });
    
    // Pass the headers in the HTTP request
    this.getMesFormations(headers,'http://localhost:8080/formateur').subscribe(
      (formateur: any[]) => {  
        this.formateurs = formateur;
        console.log(formateur)     
      },
      (error: HttpErrorResponse) => {  // Define the type of 'error' as 'HttpErrorResponse'
        console.error('Error fetching formateurs:', error);
      }
    );
  }

  fetchFormations(): void {
    // Define the headers with the token
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}` // Include the token in the 'Authorization' header
    });

    // Pass the headers in the HTTP request
    this.getMesFormations(headers,this.Url).subscribe(
      (formations: any[]) => {  // Define the type of 'formations' as 'any[]'
        this.formations = formations;
        console.log(formations)
        // Fetch dates for each formation
        this.formations.forEach(formation => {
          this.fetchIndividu(formation.id).subscribe(
            (individus: any[]) => {
              formation.individus = individus;
              formation.individuCount = formation.individus.length;
            },
            (error: HttpErrorResponse) => {
              console.error('Error fetching individus for formation:', error);
            }
          );
        });
      },
      (error: HttpErrorResponse) => {  // Define the type of 'error' as 'HttpErrorResponse'
        console.error('Error fetching formations:', error);
      }
    );
  }


  fetchIndividu(formationId: number): any {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    });
    return this.http.get<any[]>(`http://localhost:8080/individu/formation/${formationId}`, { headers: headers });
  }
  
  getMesFormations(headers: HttpHeaders,Url:string): any {
    return this.http.get<any[]>(`${Url}`, { headers: headers });
    }

    deleteFormation(id: number): void {
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      });
    
      this.http.delete<any[]>(`http://localhost:8080/formation/${id}`, { headers: headers })
        .subscribe(
          () => {
            // Handle success, if needed
            console.log(`Formation with ID ${id} deleted successfully.`);
            location.reload();
          },
          (error) => {
            // Handle error, if needed
            console.error(`Error deleting formation with ID ${id}:`, error);
          }
        );
    }

    addFormation(form: any): void {
      // Define the headers with the token
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      });
  
      // Make HTTP POST request to add a new formation
      this.http.post<any>(this.Url, this.newFormation, { headers: headers })
        .subscribe(
          () => {
            // Handle success, if needed
            console.log('Formation added successfully.');
            // Reset the form
            form.resetForm();
            location.reload();

          },
          (error: HttpErrorResponse) => {
            // Handle error, if needed
            console.error('Error adding formation:', error);
          }
        );
    }

    open(content: TemplateRef<any>) {
      this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        },
      );
    }

    private getDismissReason(reason: any): string {
      switch (reason) {
        case ModalDismissReasons.ESC:
          return 'by pressing ESC';
        case ModalDismissReasons.BACKDROP_CLICK:
          return 'by clicking on a backdrop';
        default:
          return `with: ${reason}`;
      }
    }

    selectFormationForEdit(formation: any): void {
      this.selectedFormation = formation;
      console.log(formation.individus)
    }
    
    editFormation(form: any): void {
      // Define the headers with the token
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      });
  
      // Make HTTP POST request to add a new formation
      this.http.put<any>(this.Url, this.selectedFormation, { headers: headers })
        .subscribe(
          () => {
            // Handle success, if needed
            console.log('Formation added successfully.');
            // Reset the form
            form.resetForm();
            location.reload();

          },
          (error: HttpErrorResponse) => {
            // Handle error, if needed
            console.error('Error adding formation:', error);
          }
        );
    }

    SchedulFormation(ScheduleForm:any):void
    {
      const planification = {
        ville: this.ville,
        formation: { id: this.selectedFormation.id },
        formateur: { id: this.selectedformateur },
        entreprise: { id: this.selectedentreprise }
      };

      const headers = new HttpHeaders({
        'Authorization': `Bearer ${this.token}` // Include the token in the 'Authorization' header
      });

      console.log("formatuer id et entroprise id "+this.selectedFormation.id,this.selectedformateur,this.selectedentreprise,this.ville)

      this.http.post<any>('http://localhost:8080/planification', planification, { headers: headers })
      .subscribe(
        (response) => {
          // Handle successful response
          console.log('Planification created successfully:', response);
          this.planificationId=response.id;
          this.selectedDates.forEach(dateObj => {
            const datePipe = new DatePipe('en-US');
            const formattedDate = datePipe.transform(dateObj, 'yyyy-MM-dd');
            
            const payload = {
              date: formattedDate, 
              planification: {id:this.planificationId}
            };
    
            this.http.post<any>('http://localhost:8080/date', payload, { headers: headers })
              .subscribe(
                (response) => {
                  // Handle successful response
                  console.log('dates created successfully:', response);
                  // Optionally, close the modal or perform other actions
                },
                (error) => {
                  // Handle error
                  console.error('Error creating dates:', error);
                  // Optionally, display an error message to the user
                }
              );
          });
        },
        (error) => {
          // Handle error
          console.error('Error creating planification:', error);
          // Optionally, display an error message to the user
        }
      );
    }

    addEvent(event: MatDatepickerInputEvent<Date>): void {
      if (event.value !== null) {
        this.selectedDates.push(event.value);
      }
    }
  
    removeDate(date: Date): void {
      this.selectedDates = this.selectedDates.filter(d => d !== date);
    }
  
    planFormation(id: number): void {
      // Implement the logic to plan the formation with the specified ID
      // This could involve routing to a planification component and passing the formation ID
    }
  
    seePlanifications(id: number): void {
      // Implement the logic to see the planifications for the formation with the specified ID
      // This could involve routing to a planifications component and passing the formation ID
    }


  


}
