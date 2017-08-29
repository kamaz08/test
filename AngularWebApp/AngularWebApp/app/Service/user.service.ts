import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { BaseService } from './Base/base.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class UserService extends BaseService {
    constructor(protected _http: Http) { super(_http); }

    public GetUsers(paramters: any = null): Observable<any> { return this.get('api/userapi/getusers/', paramters); }
    public AddUser(model: any): Observable<any> { return this.post('api/userapi/adduser/', model); }
    public EditUser(id: number, model: any): Observable<any> { return this.put('api/userapi/adduser/', id, model); }
    public DeleteUser(id: number): Observable<any> { return this.delete('api/userapi/deleteuser/', id); }
}