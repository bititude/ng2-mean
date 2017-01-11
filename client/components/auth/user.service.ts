'use strict';

import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { AuthHttp } from 'angular2-jwt';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class UserService {
  static parameters = [AuthHttp];
  constructor(private authHttp: AuthHttp) {
  }

  handleError(err) {
    Observable.throw(err.json().error || 'Server error');
  }

  query() {
    return this.authHttp.get('/api/users/').map(res => res.json()).catch(err => Observable.throw(err.json() || 'Server error'));
  }
  get(user = { id: 'me' }) {
    return this.authHttp.get(`/api/users/${user.id}`).map(res => res.json()).catch(err => Observable.throw(err.json() || 'Server error'));
  }
  create(user) {
    return this.authHttp.post('/api/users/', user).map(res => res.json()).catch(err => Observable.throw(err.json() || 'Server error'));
  }
  changePassword(user, oldPassword, newPassword) {
    return this.authHttp.put(`/api/users/${user.id}/password`, { oldPassword, newPassword }).map(res => res.json()).catch(err => Observable.throw(err.json() || 'Server error'));
  }
  remove(user) {
    return this.authHttp.delete(`/api/users/${user.id}`).map(res => res.json()).catch(err => Observable.throw(err.json() || 'Server error'));
  }
};
