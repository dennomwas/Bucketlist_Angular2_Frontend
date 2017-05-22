import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { LoginComponent } from './accounts/login.component';
import { RegistrationComponent } from './accounts/registration.component';
import { BucketlistComponent } from './bucketlist/bucketlist.component';
import { BucketitemsComponent } from './bucketitems/bucketitems.component';

import {AuthGuard} from './authguard/auth.guard';


export const routes: Routes = [
                                {path: '', redirectTo: 'login', pathMatch: 'full'},
                                {path: 'login', component: LoginComponent},
                                {path: 'register', component: RegistrationComponent},
                                {path: 'bucketlists', component: BucketlistComponent, canActivate: [AuthGuard]},
                                {path: 'bucketlists/:id', component: BucketlistComponent, canActivate: [AuthGuard]},
                                {path: 'bucketlists/:id/items', component: BucketitemsComponent, canActivate: [AuthGuard]}
                              ];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],

  exports: [RouterModule]
})

export class AppRouteModule {}

export const routingComponents = [
                                  LoginComponent,
                                  RegistrationComponent,
                                  BucketlistComponent,
                                  BucketitemsComponent
                                 ];

