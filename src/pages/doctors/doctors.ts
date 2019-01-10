import { Component } from '@angular/core';
import { IonicPage, PopoverController, PopoverOptions } from 'ionic-angular';
import { DOCTOR_LIST } from '../../mocks/doctors';
import { Doctor } from '../../models/doctor.interface';

/**
 * Generated class for the DoctorsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-doctors',
  templateUrl: 'doctors.html',
})
export class DoctorsPage {

  constructor(private popOver:PopoverController) {
  }

  doctorList=DOCTOR_LIST; //list of DummyObjects
  
  /*called when a doctor selected from doctors, and opens a popUp for feedback for chosen doctor
    INPUT: object of type Doctor
    RETURN: Void*/
  selectDoctor($event:Doctor){
    
    //customize the popover
  const feedBackPopOverOptions:PopoverOptions={
    cssClass:"popOver_feedBack_size"
  }
  const feedBackPopOver=this.popOver.create('FeedBackPage',{doctor:$event},feedBackPopOverOptions);
  feedBackPopOver.present();
  }
}
