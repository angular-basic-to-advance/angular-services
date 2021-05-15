import { Injectable } from "@angular/core";
import { LoggingServices } from "./logging.services";


@Injectable()
export class AccountServices{
    accounts = [
        {
          name: 'Master Account',
          status: 'active'
        },
        {
          name: 'Testaccount',
          status: 'inactive'
        },
        {
          name: 'Hidden Account',
          status: 'unknown'
        }
      ];

      constructor(private loggingService : LoggingServices) {}

      onAddAccount(name :string,status : string){
          this.accounts.push({name,status})
          this.loggingService.logStatusChange(status);
      }

      onUpdateStatus(id:number,status:string) {
        this.accounts[id].status = status;
        this.loggingService.logStatusChange(status);
      }


}