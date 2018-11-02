import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Configs } from '../app.config';
import { AuthenticationService } from '../Shared/services/authentication.service';

@Injectable()
export class UserService {

  constructor(
    private http: Http,
    private authentication: AuthenticationService
  ) { }

  createUser(formdata): Observable<any> {
    const url = Configs.USER.createUser;
    return this.http.post(url, formdata).map(result => {
      return result.json();
    });
  }
  updateUser(formdata): Observable<any> {
    const url = Configs.USER.updateUser;
    console.log(formdata);
    return this.http.put(url, formdata, this.authentication.addTokenInHeader()).map(result => {
      return result.json();
    });
  }
  getUserByToken(): Observable<any> {
    const url = Configs.USER.getuserbytoken;
    return this.http.get(url, this.authentication.addTokenInHeader()).map(user => {
      return user.json();
    });
  }
  deleteUser(): Observable<any> {
    const url = Configs.USER.deleteUser;
    return this.http.delete(url, this.authentication.addTokenInHeader()).map(result => {
      return result.json();
    });
  }
}
