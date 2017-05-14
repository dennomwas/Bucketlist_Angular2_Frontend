import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {AppRouteModule, routingComponents} from './app.route.module';
import {BucketlistService} from './bucketlist/bucketlist.service';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRouteModule
  ],
  providers: [BucketlistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
