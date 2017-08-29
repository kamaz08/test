import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { BaseService } from './Base/base.service';

@Injectable()
export class JokeService extends BaseService {
    constructor(protected _http: Http) { 
        super(_http);
    }
    public GetJoke(parameters: any = null): Observable<any> { return this.get('api/cardapi/getjokes/', parameters);}
    public Login1(): Observable<any> { return this.login();}

}