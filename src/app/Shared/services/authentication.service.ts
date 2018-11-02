import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Configs } from '../../app.config';
import { Http, RequestOptions, Headers } from '@angular/http';
import { CanActivate, Router } from '@angular/router';
@Injectable()
export class AuthenticationService implements CanActivate {

  constructor(
    private http: Http,
    private router: Router
  ) { }
  canActivate() {
    const login = localStorage.getItem('x');
    if (!login) {
      this.router.navigate(['./login']);
    }
    return login ? true : false;
  }
  register(formdata): Observable<any> {
    const url = Configs.USER.register;
    return this.http.post(url, formdata).map(result => {
      return result.json();
    });
  }
  login(formdata): Observable<any> {
    const url = Configs.USER.login;
    return this.http.post(url, formdata).map(result => {
      return result.json();
    });
  }

  forgot_Password(formdata): Observable<any> {
    const url = Configs.USER.forgotpassword;
    return this.http.post(url, formdata).map(result => {
      return result.json();
    });
  }

  active(formdata): Observable<any> {
    const url = Configs.USER.active;
    return this.http.post(url, formdata).map(result => {
      return result.json();
    });
  }
  addTokenInHeaderForFile() {
    const headers = new Headers();
    const nameToken = Configs.USER.token;
    const token = localStorage.getItem(nameToken) as string;
    headers.append('x-access-token', token);
    const option = new RequestOptions({ headers: headers });
    return option;
  }

  addTokenInHeader() {
    const headers = new Headers();
    const nameToken = Configs.USER.token;
    const token = localStorage.getItem(nameToken) as string;
    headers.append('Content-Type', 'application/json');
    headers.append('x-access-token', token);
    const option = new RequestOptions({ headers: headers });
    return option;
  }
}
