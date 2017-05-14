import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BucketitemsComponent } from './bucketitems.component';

describe('BucketitemsComponent', () => {
  let component: BucketitemsComponent;
  let fixture: ComponentFixture<BucketitemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BucketitemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BucketitemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
