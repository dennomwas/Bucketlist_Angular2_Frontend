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

  getAllItems(bucket_id: number): Observable<any> {
    const getItemUrl = this.bucketitemsUrl + bucket_id + '/items/';

    return this._http.get(getItemUrl,
                         {headers: this.headers})
      .map((response: Response) => response.json())
      .catch(this.handleError);
  }

  addItem(bucket_id: number, item_name: string) {
    const addItemUrl = this.bucketitemsUrl + bucket_id + '/items/';
    const newItem = JSON.stringify({
                                    'item_name': item_name
                                   });
    return this._http.post(addItemUrl,
                           newItem,
                           {headers: this.headers})
      .catch(this.handleError);
  }

  updateItem(bucket_id: number, item_id: number, item_name: string, status: boolean) {
    const updateItemUrl = this.bucketitemsUrl + bucket_id + /items/ + item_id + '/';
    const updateItem = JSON.stringify({
                                       'item_name': item_name,
                                       'status': status
                                      });
    return this._http.put(updateItemUrl,
                          updateItem,
                          { headers: this.headers })
      .catch(this.handleError);
  }
  deleteBucket(bucket_id: number, item_id: number) {
    const deleteItemUrl = this.bucketitemsUrl + bucket_id + /items/ + item_id + '/';

    return this._http.delete(deleteItemUrl,
                             {headers: this.headers})
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    return Observable.throw(error.json().error || 'Server error');
  }
}
