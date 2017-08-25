import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home.component';
import { UserComponent } from './component/user.component';
import { BCardTestComponent } from './Component/Example/BCardTestComponent';
import { TutorialComponent } from './Component/Example/Tutorial/TutorialComponent';
import { RegisterComponent } from './Component/Page/Authentication/register.component';



const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'user', component: UserComponent },
    { path: 'example', component: BCardTestComponent },
    { path: 'tutorial', component: TutorialComponent },
    { path: 'register', component: RegisterComponent },
    { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);