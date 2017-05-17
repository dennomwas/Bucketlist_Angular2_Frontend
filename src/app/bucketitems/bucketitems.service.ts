import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

import {IBucketItem} from './bucketitem';


@Injectable()
export class BucketitemsService {
  private headers: Headers;
  private bucketitemsUrl = 'http://127.0.0.1:5000/bucketlists/';

  tokenAuth = localStorage.getItem('token');

  constructor(private _http: Http) {
    this.headers = new Headers();
    this.headers.append('Accept', 'application/json');
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Access-Control-Allow-Origin', '*');
    this.headers.append('Authorization', 'Bearer ' + this.tokenAuth);
  }
  getAllItems(bucket_id: number): Observable<IBucketItem[]> {
    const getItemUrl = this.bucketitemsUrl + bucket_id + '/items/';
    console.log(getItemUrl);
    return this._http.get(getItemUrl,
          {headers: this.headers})
      .map((response: Response) => <IBucketItem[]>response.json())
      .catch(this.handleError);
  }


  private handleError(error: Response) {
    console.log(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
