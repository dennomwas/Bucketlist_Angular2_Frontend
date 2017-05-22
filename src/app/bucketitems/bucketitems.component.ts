import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {IBucketItem} from './bucketitem';
import {BucketitemsService} from './bucketitems.service';

@Component({
  selector: 'app-bucketitems',
  templateUrl: './bucketitems.component.html',
  styleUrls: ['./bucketitems.component.css']
})
export class BucketitemsComponent implements OnInit {
 title = 'My Bucket Items';
 errorMessage: string;
 bucketItems: IBucketItem[];
 itemToAdd: string;
 itemToUpdate: string;
 itemStatus: boolean;
 buckId: number;

 constructor(private _bucketitemsservice: BucketitemsService,
             private _activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.getBucketItems(this._activatedRoute.snapshot.params.id);
  }
  getBucketItems(bucketId: number) {
    this.buckId = bucketId;
    this._bucketitemsservice.getAllItems(bucketId)

      .subscribe(
        itemsResponse => {
          if (itemsResponse.length) {
            this.bucketItems = itemsResponse;
          } else {
            this.errorMessage = 'There are no items';
          }
        },
        error => this.errorMessage = <any>error);
  }

  addBucketItem() {
   this._bucketitemsservice.addItem(this.buckId, this.itemToAdd)

     .subscribe(
       addItem => {
         this.bucketItems = addItem;
         location.reload();
       });
  }
  updateBucketItem(id: number) {
   this._bucketitemsservice.updateItem(this.buckId, id, this.itemToUpdate, this.itemStatus)

       .subscribe(
         itemUpdate => {
           if (itemUpdate) {
             location.reload();
           }
         });
  }
  deleteBucketItem(id: number) {
   this._bucketitemsservice.deleteBucket(this.buckId, id)

     .subscribe(
       deleteItem => {
         if (deleteItem) {
           location.reload();
         }
       });
  }

}
