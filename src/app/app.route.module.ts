import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { LoginComponent } from './accounts/login.component';
import { BucketlistComponent } from './bucketlist/bucketlist.component';



export const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'bucketlists', component: BucketlistComponent}

];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],

  exports: [RouterModule]
})

export class AppRouteModule {}

export const routingComponents = [BucketlistComponent, LoginComponent];

