"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppErrorHandler = (function (_super) {
    __extends(AppErrorHandler, _super);
    function AppErrorHandler() {
        // We rethrow exceptions, so operations like 'bootstrap' will result in an error
        // when an error happens. If we do not rethrow, bootstrap will always succeed.
        return _super.call(this, true) || this;
    }
    AppErrorHandler.prototype.handleError = function (error) {
        alert(error);
        _super.prototype.handleError.call(this, error);
    };
    return AppErrorHandler;
}(core_1.ErrorHandler));
exports.default = AppErrorHandler;
var DialogOverviewExampleDialog = (function () {
    function DialogOverviewExampleDialog() {
    }
    DialogOverviewExampleDialog = __decorate([
        core_1.Component({
            selector: 'dialog-overview-example-dialog',
            templateUrl: 'dialog-overview-example-dialog.html',
        })
    ], DialogOverviewExampleDialog);
    return DialogOverviewExampleDialog;
}());
exports.DialogOverviewExampleDialog = DialogOverviewExampleDialog;
//# sourceMappingURL=errorhandler.js.map