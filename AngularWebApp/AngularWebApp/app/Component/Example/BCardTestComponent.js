"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var joke_service_1 = require("../../Service/joke.service");
var forms_1 = require("@angular/forms");
var BCardTestComponent = (function () {
    function BCardTestComponent(fb, _jokeService) {
        this.fb = fb;
        this._jokeService = _jokeService;
        this.componentData = null;
        this.bccard = [];
        this.selectedBCard = null;
        this.color = 'primary';
        this.mode = 'indeterminate';
        this.isLoad = true;
        this.LoadJokes();
    }
    BCardTestComponent.prototype.myMethod = function (event) {
        console.log(event);
    };
    BCardTestComponent.prototype.scrollEvent = function (event) {
        if (this.panel.nativeElement.scrollTop == this.panel.nativeElement.scrollHeight - this.panel.nativeElement.clientHeight) {
            this.LoadJokes();
        }
    };
    BCardTestComponent.prototype.LoadJokes = function () {
        var _this = this;
        this.isLoad = false;
        this._jokeService.GetJoke()
            .subscribe(function (jokes) { _this.bccard = _this.bccard.concat(jokes); _this.isLoad = true; }, function (error) { debugger; });
    };
    __decorate([
        core_1.ViewChild('panel', { read: core_1.ElementRef }),
        __metadata("design:type", core_1.ElementRef)
    ], BCardTestComponent.prototype, "panel", void 0);
    BCardTestComponent = __decorate([
        core_1.Component({
            template: "\n<md-card #panel style=\"overflow-y: auto;height: 80vh\" (focus)=\"myMethod('fucus')\" (blur)=\"myMethod('blur')\"(submit)=\"myMethod('submit')\"(scroll)=\"scrollEvent($event)\"(cut)=\"myMethod('cut')\"(copy)=\"myMethod('copy')\"(paste)=\"myMethod('paste')\"\n(keydown)=\"myMethod('keydown')\"(keypress)=\"myMethod('keypress')\"(keyup)=\"myMethod('keyup')\"(mouseenter)=\"myMethod('mouseenter')\"(mousedown)=\"myMethod('mousedown')\"(mouseup)=\"myMethod('mouseup')\"(dblclick)=\"myMethod('dubleclick')\"\n(drag)=\"myMethod('drag')\"(dragover)=\"myMethod('dragover')\"(drop)=\"myMethod('drop')\" >\n    <ul style=\"list-style-type: none; width: 500px; margin: auto;\">\n    <li *ngFor=\"let item of bccard\" style=\"padding-bottom : 20px\">\n        <BCard [bcardProperty]=\"item\"></BCard>\n    </li>\n    <md-progress-spinner *ngIf=\"!isLoad\" [color]=\"color\" [mode]=\"mode\"></md-progress-spinner>\n\n    <button md-raised-button (click)=\"LoadJokes()\" style=\"margin: auto;\">Dodaj</button>\n    </ul>\n</md-card>"
        })
        //
        ,
        __metadata("design:paramtypes", [forms_1.FormBuilder, joke_service_1.JokeService])
    ], BCardTestComponent);
    return BCardTestComponent;
}());
exports.BCardTestComponent = BCardTestComponent;
//# sourceMappingURL=BCardTestComponent.js.map