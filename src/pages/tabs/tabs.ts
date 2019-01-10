import { Component } from '@angular/core';
import { IonicPage} from 'ionic-angular';

/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  tab1Root:string;
  tab2Root:string;
  tab3Root:string;
  tab4Root:string;
  tab5Root:string;
  numOfNotifications=5;
  constructor() {
    this.tab1Root='DoctorsPage';
    this.tab2Root='DoctorsPage';
    this.tab3Root='DoctorsPage';
    this.tab4Root='DoctorsPage';
    this.tab5Root='DoctorsPage';

  }


}
