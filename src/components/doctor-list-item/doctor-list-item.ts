import { Component, Input, Output,EventEmitter } from '@angular/core';
import { Doctor } from '../../models/doctor.interface';

/**
 * Generated class for the DoctorListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'doctor-list-item',
  templateUrl: 'doctor-list-item.html'
})
export class DoctorListItemComponent {

  @Input() doctor:Doctor; //get object of type doctor from DoctorsPage
  @Output() selectedDoctor:EventEmitter<Doctor>; //sends object of the chosen doctor from list to DoctorsPage
  constructor() {
    this.selectedDoctor=new EventEmitter<Doctor>();
  }

  /** when select doctor from list, send object of doctor to DoctorsPage */
  SelectDoctor($chosenDoctor:Doctor){
    this.selectedDoctor.emit($chosenDoctor);
  }

}
