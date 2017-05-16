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

  tokenAuth = localStorage.getItem('token');

  constructor(private _http: Http) {
    this.headers = new Headers();
    this.headers.append('Accept', 'application/json');
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Access-Control-Allow-Origin', '*');
    this.headers.append('Authorization', 'Bearer ' + this.tokenAuth);
  }
  getAllBuckets(): Observable<IBucketlist[]> {
    return this._http.get(this.bucketlistUrl,
           { headers: this.headers })
      .map((response: Response) => <IBucketlist[]>response.json().Results)
      // .do(data => console.log('All: ' + JSON.stringify(data)))
      .catch(this.handleError);
  }
  deleteBucket(bucket_id: number) {
    const deleteUrl = this.bucketlistUrl + `${bucket_id}`;

    return this._http.delete(deleteUrl, {headers: this.headers})
           .catch(this.handleError);
  }
  addBucket(bucket_name: string) {
    const json_data = JSON.stringify({
      'bucket_name': bucket_name
    });
    return this._http.post(this.bucketlistUrl, json_data, {headers: this.headers})
      .catch(this.handleError);
  }
  updateBucket(bucket_id: number, bucket_name: string) {
    const updateUrl = this.bucketlistUrl + bucket_id;
    const newUpdate = JSON.stringify({'bucket_name': bucket_name});
    return this._http.put(updateUrl, newUpdate , {headers: this.headers})
      .catch(this.handleError);
  }
  private handleError(error: Response) {
    console.log(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
