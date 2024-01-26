import { Component, OnInit } from '@angular/core';
import { FormationDetailServiceService } from '../../liste-formation/formation-detail.service.service';


@Component({
  selector: 'app-formation-detaille',
  templateUrl: './formation-detaille.component.html',
  styleUrls: ['./formation-detaille.component.css']
})
export class FormationDetailleComponent implements OnInit {
  selectedFormation: any;

  constructor(private formationDetailServiceService: FormationDetailServiceService) {}

  ngOnInit() {
    // Retrieve the selected formation from the service
    this.selectedFormation = this.formationDetailServiceService.getSelectedFormation();
    console.log(this.selectedFormation)
  }
}
