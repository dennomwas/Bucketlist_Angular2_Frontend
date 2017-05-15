import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import { Http, Response, Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class RegistrationService {
  private headers: Headers;
  private registerUrl = 'http://127.0.0.1:5000/auth/register/';

  constructor(private _http: Http, private _router: Router) {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Access-Control-Allow-Origin', '*');
  }
  registerUser(fullname: string, username: string, password: string) {
    return this._http.post(this.registerUrl,
          JSON.stringify({fullname, username, password}),
                         {headers: this.headers})
      .map((response) => {
          console.log(response);
          this._router.navigate(['login']);
            return response.json().username;
    })
      // .do(res => console.log('All: ' + JSON.stringify(response)))
      .catch(this.handleError);
  }
  private handleError(error: Response) {
    console.log(error);
    return Observable.throw(error.json().error || 'Server Error');
  }

}
