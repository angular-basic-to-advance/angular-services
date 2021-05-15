import { Component } from '@angular/core';
import { AccountServices } from '../account.services';
import { AccountComponent } from '../account/account.component';
import { LoggingServices } from '../logging.services';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers:[LoggingServices]
})
export class NewAccountComponent {


  constructor(private loggingServices : LoggingServices,
              private accountServices : AccountServices) {}

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountServices.onAddAccount(accountName,accountStatus)
    this.loggingServices.logStatusChange(status);
  }
}
