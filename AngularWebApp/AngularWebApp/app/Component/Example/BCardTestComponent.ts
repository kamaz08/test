import { Component, ViewChild, ElementRef } from "@angular/core";
import { BCard } from './../Base/Bcard';
import { BCardProperty } from './../Base/BCardProperty';
import { JokeService } from '../../Service/joke.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Global } from '../../Shared/global';
import { Event } from '@angular/router';



@Component({
    template: `
<md-card #panel style="overflow-y: auto;height: 80vh" (focus)="myMethod('fucus')" (blur)="myMethod('blur')"(submit)="myMethod('submit')"(scroll)="scrollEvent($event)"(cut)="myMethod('cut')"(copy)="myMethod('copy')"(paste)="myMethod('paste')"
(keydown)="myMethod('keydown')"(keypress)="myMethod('keypress')"(keyup)="myMethod('keyup')"(mouseenter)="myMethod('mouseenter')"(mousedown)="myMethod('mousedown')"(mouseup)="myMethod('mouseup')"(dblclick)="myMethod('dubleclick')"
(drag)="myMethod('drag')"(dragover)="myMethod('dragover')"(drop)="myMethod('drop')" >
    <ul style="list-style-type: none; width: 500px; margin: auto;">
    <li *ngFor="let item of bccard" style="padding-bottom : 20px">
        <BCard [bcardProperty]="item"></BCard>
    </li>
    <md-progress-spinner *ngIf="!isLoad" [color]="color" [mode]="mode"></md-progress-spinner>

    <button md-raised-button (click)="LoadJokes()" style="margin: auto;">Dodaj</button>
    </ul>
</md-card>`
})


//
export class BCardTestComponent {
    componentData: any = null;
    bccard: BCardProperty[] = [];
    selectedBCard: BCardProperty = null;
    @ViewChild('panel', { read: ElementRef }) public panel: ElementRef;
    color = 'primary';
    mode = 'indeterminate';
    isLoad: boolean = true;

    constructor(private fb: FormBuilder, private _jokeService: JokeService) {
        this.LoadJokes();
    }

    myMethod(event: any) {
        console.log(event);
    }

    scrollEvent(event: any) {
        if (this.panel.nativeElement.scrollTop == this.panel.nativeElement.scrollHeight - this.panel.nativeElement.clientHeight) {
            debugger;
            this.LoadJokes();
            
        }
    }

    LoadJokes(): void {
        this.isLoad = false;
        this._jokeService.get(Global.BASE_JOKE_ENDPOINT)
            .subscribe(jokes => { this.bccard = this.bccard.concat(jokes); this.isLoad = true;},
            error => { });
    }
}