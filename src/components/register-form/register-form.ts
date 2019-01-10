import { Component, Output,EventEmitter } from '@angular/core';
import { Account } from '../../models/Account.interface';
/**
 * Generated class for the RegisterFormComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'register-form',
  templateUrl: 'register-form.html'
})
export class RegisterFormComponent {

  account = {} as Account;  
  @Output() accountDataEmitter:EventEmitter<Account>;
  constructor() {
    this.accountDataEmitter=new EventEmitter<Account>();
  }

  /**after filling all data , send object of the new account to be registered "in real app scenario" */
  next(){
    this.accountDataEmitter.emit(this.account);
  }
}
