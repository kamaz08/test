"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var home_component_1 = require("./component/home.component");
var user_component_1 = require("./component/user.component");
var BCardTestComponent_1 = require("./Component/Example/BCardTestComponent");
var TutorialComponent_1 = require("./Component/Example/Tutorial/TutorialComponent");
var register_component_1 = require("./Component/Page/Authentication/register.component");
var appRoutes = [
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'user', component: user_component_1.UserComponent },
    { path: 'example', component: BCardTestComponent_1.BCardTestComponent },
    { path: 'tutorial', component: TutorialComponent_1.TutorialComponent },
    { path: 'register', component: register_component_1.RegisterComponent },
    { path: '**', redirectTo: 'home', pathMatch: 'full' }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map