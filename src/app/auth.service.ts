import { EventEmitter, Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class AuthService{
    loggedIn = false;
    sessionStatus = new EventEmitter<{loggedIn: boolean}>();

    isLoggedIn(){
        return this.loggedIn;
    }

    login(){
        this.loggedIn = true;
        this.sessionStatus.emit({loggedIn: this.loggedIn});
    }

    logout(){
        this.loggedIn = false;
        this.sessionStatus.emit({loggedIn: this.loggedIn});
    }
}