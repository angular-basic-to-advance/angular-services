import { Component, Input } from '@angular/core';
import { AccountServices } from '../account.services';
import { LoggingServices } from '../logging.services';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  // providers:[LoggingServices,AccountServices] // this was what giving error
  providers:[LoggingServices] // if we add Services class to providers, A new instance of the class is created
  // hence we will not get the resukt i.e push to array
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;


  constructor(private loggingServices : LoggingServices,private accountServices:AccountServices) {}


  onSetTo(status: string) {
    this.accountServices.onUpdateStatus(this.id,status)
    this.loggingServices.logStatusChange(status);
  }
}
