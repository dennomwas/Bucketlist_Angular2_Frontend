import { Injectable } from '@angular/core';
import { Router, CanActivate} from '@angular/router';

import { LoginService } from '../accounts/login.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private _loginService: LoginService, private _router: Router) {}

  canActivate() {
    if (this._loginService.loginSuccess()) {
      return true;
    }else {
      this._router.navigate(['login']);
    }
  }

}
