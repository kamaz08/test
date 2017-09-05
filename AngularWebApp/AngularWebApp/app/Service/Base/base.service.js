"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
require("rxjs/add/operator/do");
require("rxjs/add/operator/catch");
var BaseService = (function () {
    function BaseService(_http) {
        this._http = _http;
    }
    BaseService.prototype.get = function (url, parameters) {
        debugger;
        var para = new URLSearchParams();
        for (var item in parameters) {
            para.set(item, parameters[item]);
        }
        var headers = new http_1.Headers({ 'Content-Type': 'application/json', 'Authorization': localStorage.getItem('token') });
        var options = new http_1.RequestOptions({ headers: headers, params: para });
        return this._http.get(url, options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    BaseService.prototype.post = function (url, model) {
        var body = JSON.stringify(model);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this._http.post(url, body, options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    BaseService.prototype.put = function (url, id, model) {
        var body = JSON.stringify(model);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this._http.put(url + id, body, options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    BaseService.prototype.delete = function (url, id) {
        debugger;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this._http.delete(url + id, options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    BaseService.prototype.handleError = function (error) {
        debugger;
        console.log('Service err: ', error);
        return error;
        // let errMsg: string;
        // debugger;
        // if (error instanceof Response) {
        //     const body = error.json() || '';
        //     const err = body.error || JSON.stringify(body);
        //     errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        // } else {
        //     errMsg = error.message ? error.message : error.toString();
        // }
        // console.error(errMsg);
        // return Observable.throw(errMsg);
    };
    BaseService.prototype.login = function () {
        var url = 'api/token';
        var urlSearchParams = new URLSearchParams();
        urlSearchParams.append('grant_type', 'password');
        urlSearchParams.append('username', 'kamaz');
        urlSearchParams.append('password', 'kamaz1');
        var body = urlSearchParams.toString();
        var headers = new http_1.Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this._http.post(url, body, options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    return BaseService;
}());
exports.BaseService = BaseService;
//# sourceMappingURL=base.service.js.map