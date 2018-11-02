import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Configs } from '../../app.config';
import { Http } from '@angular/http';
import { AuthenticationService } from './authentication.service';
@Injectable()
export class FileService {

  constructor(
    private http: Http,
    private authentication: AuthenticationService
  ) { }

  uploadFile(formdata, id): Observable<any> {
    const nameToken = Configs.USER.token;
    const url = Configs.FILE.uploadProfile;
    if (localStorage.getItem(nameToken)) {
      return this.http.put(url + '/' + id, formdata, this.authentication.addTokenInHeaderForFile()).map(result => {
        return result.json();
      });
    }
  }
}
