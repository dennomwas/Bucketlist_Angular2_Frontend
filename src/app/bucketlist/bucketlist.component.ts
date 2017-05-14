import { Component, OnInit } from '@angular/core';

import { BucketlistService } from './bucketlist.service';
import { IBucketlist } from './bucketlist';

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

  constructor(private _bucketlistservice: BucketlistService) { }

  ngOnInit(): void {
    this._bucketlistservice.getAllBuckets()
      .subscribe(
        bucketlists => this.bucketlists,
        error => this.errorMessage = <any>error);
  }

}
