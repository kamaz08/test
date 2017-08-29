"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var forms_2 = require("@angular/forms");
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
var ng2_bs3_modal_1 = require("ng2-bs3-modal/ng2-bs3-modal");
var app_routing_1 = require("./app.routing");
var animations_1 = require("@angular/platform-browser/animations");
var material_1 = require("@angular/material");
var errorhandler_1 = require("./shared/errorhandler");
var home_component_1 = require("./component/home.component");
var user_component_1 = require("./component/user.component");
var Bcard_1 = require("./Component/Base/Bcard");
var BForm_1 = require("./Component/Base/BForm");
var BCardTestComponent_1 = require("./Component/Example/BCardTestComponent");
var TutorialComponent_1 = require("./Component/Example/Tutorial/TutorialComponent");
var hero_detail_component_1 = require("./Component/Example/Tutorial/hero-detail.component");
var register_component_1 = require("./Component/Page/Authentication/register.component");
var firstpage_component_1 = require("./Component/Page/Base/firstpage.component");
var user_service_1 = require("./Service/user.service");
var joke_service_1 = require("./Service/joke.service");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.ReactiveFormsModule, http_1.HttpModule, app_routing_1.routing, ng2_bs3_modal_1.Ng2Bs3ModalModule, material_1.MaterialModule, material_1.MdNativeDateModule, forms_2.FormsModule, animations_1.BrowserAnimationsModule],
            declarations: [app_component_1.AppComponent, home_component_1.HomeComponent, user_component_1.UserComponent, Bcard_1.BCard, BForm_1.BForm, BCardTestComponent_1.BCardTestComponent, TutorialComponent_1.TutorialComponent, hero_detail_component_1.HeroDetailComponent, register_component_1.RegisterComponent, firstpage_component_1.FirstPageComponent],
            providers: [{ provide: core_1.ErrorHandler, useClass: errorhandler_1.default }, { provide: common_1.APP_BASE_HREF, useValue: '/' }, user_service_1.UserService, joke_service_1.JokeService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map