import { IBucketItem } from '../bucketitems/bucketitem';

export interface IBucketlist {
  bucket_id: number;
  bucket_name: string;
  bucket_items: IBucketItem[];
  date_created: Date;
  date_modifiied: Date;
  created_by: number;
}
