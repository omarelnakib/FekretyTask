import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController } from 'ionic-angular';
import { Doctor } from '../../models/doctor.interface';
/**
 * Generated class for the FeedBackPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed-back',
  templateUrl: 'feed-back.html',
})
export class FeedBackPage {

  constructor(public view: ViewController, public navParams: NavParams) {
  }

  doctor:Doctor;

  ionViewWillLoad() {
  this.doctor=this.navParams.get('doctor');
  console.log(this.doctor);
  }

  //dismiss Feedback popUp
  closeFeedBack(){
    this.view.dismiss();
  }

}
