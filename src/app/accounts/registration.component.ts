import { Component, OnInit } from '@angular/core';
import {RegistrationService} from './registration.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  title = 'Enter your details to register!'
  fullname: string;
  username: string;
  password: string;


  constructor(private _registrationService: RegistrationService,
              private _router: Router) { }
  registration(): void {
    this._registrationService.registerUser(this.fullname, this.username, this.password)
      .subscribe(
        (data) => {
          if (data) {
            console.log(data);
            this._router.navigate(['login']);
          }
        },
      (error) => {
        if (error) {
          this.errorHandler(error);
          console.log(error);
        }
      }
    );
  }

  ngOnInit() {
  }

  errorHandler(error: any): void {
    console.log(error);
  }

}
