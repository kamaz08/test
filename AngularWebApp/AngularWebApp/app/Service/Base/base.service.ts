import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

export class BaseService {
    constructor(protected _http: Http) { }

    protected get(url: string, parameters: any): Observable<any> {
        debugger;
        let para: URLSearchParams = new URLSearchParams();
        for (var item in parameters) {
            para.set(item, parameters[item]);
        }
        let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization' : localStorage.getItem('token')});
        let options = new RequestOptions({ headers: headers, params: para });

        return this._http.get(url, options)
            .map((response: Response) => <any>response.json())
            .catch(this.handleError);
    }

    protected post(url: string, model: any): Observable<any> {
        let body = JSON.stringify(model);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this._http.post(url, body, options)
            .map((response: Response) => <any>response.json())
            .catch(this.handleError);
    }

    protected put(url: string, id: number, model: any): Observable<any> {
        let body = JSON.stringify(model);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this._http.put(url + id, body, options)
            .map((response: Response) => <any>response.json())
            .catch(this.handleError);
    }

    protected delete(url: string, id: number): Observable<any> {
        debugger;
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this._http.delete(url + id, options)
            .map((response: Response) => <any>response.json())
            .catch(this.handleError);
    }
    private handleError(error: Response | any) {
        debugger;
        console.log('Service err: ', error)
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
    }

    public login(): Observable<any> {
        let url = 'api/token';
       
        let urlSearchParams = new URLSearchParams();
        urlSearchParams.append('grant_type', 'password');
        urlSearchParams.append('username', 'kamaz');
        urlSearchParams.append('password', 'kamaz1');
        let body = urlSearchParams.toString() 

        
        
        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded'});
        let options = new RequestOptions({ headers: headers });
        return this._http.post(url, body, options)
            .map((response: Response) =><any>response.json())
            .catch(this.handleError);
    }

}