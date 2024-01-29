import { Component, OnInit } from '@angular/core';
import { FormationDetailServiceService } from '../../liste-formation/formation-detail.service.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-formation-detaille',
  templateUrl: './formation-detaille.component.html',
  styleUrls: ['./formation-detaille.component.css']
})
export class FormationDetailleComponent implements OnInit {

  selectedFormation: any;
   
  constructor(private formationDetailServiceService: FormationDetailServiceService, private fb: FormBuilder) {}
  myForm=this.fb.group({
    code: []  
  });

  ngOnInit() {
    // Retrieve the selected formation from the service
    this.selectedFormation = this.formationDetailServiceService.getSelectedFormation();
    console.log(this.selectedFormation)
  }

 

  onSubmit() {
     const aa=this.myForm.get('code');
      console.log('Value submitted:',aa);
   
  }
}
