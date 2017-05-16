import { Component, OnInit } from '@angular/core';

import { BucketlistService } from './bucketlist.service';
import { IBucketlist } from './bucketlist';
import { LoginService } from '../accounts/login.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-bucketlist',
  moduleId: module.id,
  templateUrl: 'bucketlist.component.html',
  styleUrls: ['bucketlist.component.css']
})
export class BucketlistComponent implements OnInit {
  title = 'Bucketlists';
  errorMessage: string;
  bucketlists: IBucketlist[];
  nameToAdd: string;
  nameToUpdate: string;
  // bucket_id: number;



  constructor(private _bucketlistservice: BucketlistService, private _loginService: LoginService, private _router: Router) { }

  ngOnInit() {
    this.getBucketLists();
  }
  addBucketlist() {
    this._bucketlistservice.addBucket(this.nameToAdd)
      .subscribe(
        addBucket => {
          this.bucketlists = addBucket;
          this.getBucketLists();
        }
      );
  }
  getBucketLists() {
    this._bucketlistservice.getAllBuckets()
      .subscribe(
        bucketlists => {
          this.bucketlists = bucketlists;
          // console.log(this.bucketlists);
        },
        error => this.errorMessage = <any>error);
  }
  deleteBucketList(id: number) {
    console.log(id);
    this._bucketlistservice.deleteBucket(id)
      .subscribe(
        deleted => {
          if (deleted) {
            this.getBucketLists();
          }
    });
  }
  updateBucketlist(id: number) {
    this._bucketlistservice.updateBucket(id, this.nameToUpdate)
      .subscribe(
        updated => {
          if (updated) {
            this.getBucketLists();
          }
        }
      );
  }

  logoutUser() {
    this._loginService.logoutUser();
    this._router.navigate(['login']);
  }
}
