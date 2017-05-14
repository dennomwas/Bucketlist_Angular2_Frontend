import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

import {IBucketlist} from './bucketlist';


@Injectable()
export class BucketlistService {
  private headers: Headers;
  private bucketlistUrl = 'http://127.0.0.1:5000/bucketlists/';

  constructor(private _http: Http) {
    this.headers = new Headers();
    this.headers.append('Accept', 'application/json');
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Access-Control-Allow-Origin', '*');
  }

  getAllBuckets(): Observable<IBucketlist[]> {
    return this._http.get(this.bucketlistUrl, { headers: this.headers })
      .map((response: Response) => <IBucketlist[]>response.json())
      .do(data => console.log('All: ' + JSON.stringify(data)))
      .catch(this.handleError);
  }
  private handleError(error: Response) {
    console.log(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
