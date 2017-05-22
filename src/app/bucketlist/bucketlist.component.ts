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
  bucketlists: IBucketlist[] = [];
  nameToAdd: string;
  nameToUpdate: string;
  nameToSearch: string;
  nextPage: string;
  previousPage: string;


  constructor(private _bucketlistservice: BucketlistService,
              private _loginService: LoginService,
              private _router: Router) { }

  ngOnInit() {
    this.getBucketLists();
  }
  addBucketlist() {
  this._bucketlistservice.addBucket(this.nameToAdd)

      .subscribe(
        addBucket => {
          if (addBucket) {
            this.nameToAdd = '';
            this.getBucketLists();
          } else { this.errorMessage = 'Bucket exists!'; }
        },
        error => this.errorMessage = <any>error.json());

  }
  getBucketLists(paginateUrl?: string) {
    this._bucketlistservice.getAllBuckets(paginateUrl)
      .subscribe(
        bucketlists => {
          if (bucketlists) {
            this.bucketlists = bucketlists.Results;
            this.nextPage = bucketlists.next;
            this.previousPage = bucketlists.previous;
          } else {
            this.errorMessage = 'You have no Bucket list! ';
          }
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
  searchBucket() {
    this._bucketlistservice.search(this.nameToSearch)
      .subscribe(
        search => {
          if (search.length) {
            this.bucketlists = search;
          } else if (this.nameToSearch && !search.length) {
            this.bucketlists = [];
          } else {
            this.getBucketLists();
          }
        });
  }
  logoutUser() {
    this._loginService.logoutUser();
    this._router.navigate(['login']);
  }

  goToNext() {
   this.getBucketLists(this.nextPage);
  }
  goToPrevious() {
   this.getBucketLists(this.previousPage);
  }

}



