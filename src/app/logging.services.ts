import { Injectable } from "@angular/core";

@Injectable({providedIn:'root'}) // this is an option we can do this or can add it in appModule
export class LoggingServices {
    logStatusChange(status:string){
        console.log('A server status changed, new status: ' + status);
    }
}