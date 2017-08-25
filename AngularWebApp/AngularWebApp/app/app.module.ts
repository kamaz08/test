import { NgModule, ErrorHandler } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal'
import { routing } from './app.routing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule, MdNativeDateModule } from '@angular/material';

import AppErrorHandler from './shared/errorhandler';



import { HomeComponent } from './component/home.component';
import { UserComponent } from './component/user.component';
import { BCard } from './Component/Base/Bcard';
import { BForm } from './Component/Base/BForm';
import { BCardTestComponent } from './Component/Example/BCardTestComponent';
import { TutorialComponent } from './Component/Example/Tutorial/TutorialComponent';
import { HeroDetailComponent } from './Component/Example/Tutorial/hero-detail.component';
import { RegisterComponent } from './Component/Page/Authentication/register.component';
import { FirstPageComponent } from './Component/Page/Base/firstpage.component';


import { UserService } from './Service/user.service';
import { JokeService } from './Service/joke.service';




@NgModule({
    imports: [BrowserModule, ReactiveFormsModule, HttpModule, routing, Ng2Bs3ModalModule, MaterialModule, MdNativeDateModule, FormsModule, BrowserAnimationsModule],
    declarations: [AppComponent, HomeComponent, UserComponent, BCard, BForm, BCardTestComponent, TutorialComponent, HeroDetailComponent, RegisterComponent, FirstPageComponent],
    providers: [{ provide: ErrorHandler, useClass: AppErrorHandler }, { provide: APP_BASE_HREF, useValue: '/' }, UserService, JokeService],
    bootstrap: [AppComponent]
})

export class AppModule { }