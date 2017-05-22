import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {AppRouteModule, routingComponents} from './app.route.module';
import {BucketlistService} from './bucketlist/bucketlist.service';
import {LoginService } from './accounts/login.service';
import {RegistrationService} from './accounts/registration.service';
import {AuthGuard} from './authguard/auth.guard';
import {BucketitemsService} from './bucketitems/bucketitems.service';


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
  providers: [BucketlistService,
              BucketitemsService,
              LoginService,
              RegistrationService,
              AuthGuard
             ],

  bootstrap: [AppComponent]
})
export class AppModule { }
