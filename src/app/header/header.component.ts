import { Component, OnInit } from "@angular/core";
import { AuthService } from "../auth.service";

@Component({
    selector: 'app-header',
    templateUrl: 'header.component.html',
    styleUrls: ['header.component.html']
})
export class HeaderComponent implements OnInit{
    loggedIn = false;

    constructor(private AuthService: AuthService){
    }

    ngOnInit(){
        this.AuthService.sessionStatus.subscribe(
            (status : {loggedIn : boolean}) => {
                this.loggedIn = status.loggedIn;
            }
        )
    }

    onLogout(){
        this.AuthService.logout();
    }
}