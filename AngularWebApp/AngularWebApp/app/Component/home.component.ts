import { Component } from '@angular/core';
import { JokeService } from '../Service/joke.service';

@Component({
    template: `<img src="../../images/users.png" style="text-align:center"/>
<button class="btn btn-primary" (click)="IdontExist()">ErrorButton</button>
<button class="btn btn-primary" (click)="Login()">Login</button>`
})

export class HomeComponent {
    constructor(private _jokeService: JokeService) {}
    
    Login() : void{
        this._jokeService.login() .subscribe(response => {
            localStorage.setItem('token', response.token_type + " " + response.access_token);



        },
        error => {debugger; });
    }
}