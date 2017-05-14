import { IBucketItem } from '../bucketitems/bucketitem';

export interface IBucketlist {
  bucketId: number;
  bucketName: string;
  bucketItems: IBucketItem[],
  date_created: Date;
  date_modifiied: Date;
  created_by: number;
}
