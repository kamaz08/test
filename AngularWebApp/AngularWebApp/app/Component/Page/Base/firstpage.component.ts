import { Component } from "@angular/core";



@Component({
    selector: 'firstpage',
    templateUrl: 'app/Component/Page/Base/firstpage.component.html',
    styleUrls: ['app/Component/Page/Base/firstpage.component.css'],
})

export class FirstPageComponent {
    public menuList = [
        { router: 'home', name : "Home"},
        { router: 'user', name : "Users" },
        { router: 'example', name : "Przykłady" },
        { router: 'tutorial', name : "Tutek" },
        { router: 'register', name : "Rejestruj" },
    ];
}