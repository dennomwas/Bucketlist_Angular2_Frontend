import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { LoginComponent } from './accounts/login.component';
import { BucketlistComponent } from './bucketlist/bucketlist.component';
import { RegistrationComponent } from './accounts/registration.component';


export const routes: Routes = [
                                {path: '', redirectTo: 'login', pathMatch: 'full'},
                                {path: 'login', component: LoginComponent},
                                {path: 'register', component: RegistrationComponent},
                                {path: 'bucketlists', component: BucketlistComponent}
                              ];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],

  exports: [RouterModule]
})

export class AppRouteModule {}

export const routingComponents = [BucketlistComponent,
                                  LoginComponent,
                                  RegistrationComponent
                                 ];

