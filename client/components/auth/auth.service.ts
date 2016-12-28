import { Injectable, EventEmitter, Output } from '@angular/core';
import { Response } from '@angular/http';
import { AuthHttp } from 'angular2-jwt';
import { UserService } from './user.service';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import { safeCb, extractData } from '../util';
import { userRoles } from '../../app/app.constants';


class User {
  _id? = '';
  name? = '';
  email? = '';
  role? = '';
  $promise? = undefined;
}

@Injectable()
export class AuthService {
  _currentUser: User = {};
  @Output()
  currentUserChanged = new EventEmitter(true);
  userRoles = userRoles || [];

  static parameters = [Http, AuthHttp, UserService];
  constructor(private _Http: Http, private _AuthHttp: AuthHttp, private _UserService: UserService) {

    if(localStorage.getItem('id_token')) {
      this._UserService.get().toPromise().then(user => {
        this.currentUser = user;
      }).catch(err => {
        console.log(err);

        localStorage.removeItem('id_token');
      });
    }
  }

  /**
   * Check if userRole is >= role
   * @param {String} userRole - role of current user
   * @param {String} role - role to check against
   */
  static hasRole(userRole, role) {
    return userRoles.indexOf(userRole) >= userRoles.indexOf(role);
  }

  get currentUser() {
    return this._currentUser;
  }

  set currentUser(user) {
    this._currentUser = user;
    this.currentUserChanged.emit(user);
  }

  /**
   * Authenticate user and save token
   *
   * @param  {Object}   user     - login info
   * @param  {Function} [callback] - function(error, user)
   * @return {Promise}
   */
  login({ email, password }, callback?: any) {
    return this._Http.post('/auth/local', {
      email,
      password
    }).toPromise().then(extractData).then(res => {
      localStorage.setItem('id_token', res.token);
      return this._UserService.get().toPromise();
    }).then(user => {
      this.currentUser = user;
      localStorage.setItem('user', JSON.stringify(user));
      safeCb(callback)(null, user);
      return user;
    }).catch(err => {
      this.logout();
      safeCb(callback)(err);
      return Promise.reject(err);
    });
  }

  /**
   * Delete access token and user info
   * @return {Promise}
   */
  logout() {
    localStorage.removeItem('user');
    localStorage.removeItem('id_token');
    this.currentUser = {};
    return Promise.resolve();
  }

  /**
   * Create a new user
   *
   * @param  {Object}   user     - user info
   * @param  {Function} callback - optional, function(error, user)
   * @return {Promise}
   */
  createUser(user, callback?: any) {
    return this._UserService.create(user).toPromise().then(data => {
      localStorage.setItem('id_token', data.token);
      return this._UserService.get().toPromise();
    }).then(_user => {
      this.currentUser = _user;
      return safeCb(callback)(null, _user);
    }).catch(err => {
      this.logout();
      return safeCb(callback)(err);
    });
  }

  /**
   * Change password
   *
   * @param  {String}   oldPassword
   * @param  {String}   newPassword
   * @param  {Function} [callback] - function(error, user)
   * @return {Promise}
   */
  changePassword(oldPassword, newPassword, callback) {
    return this._UserService.changePassword({ id: this.currentUser._id }, oldPassword, newPassword)
    .toPromise().then(() => safeCb(callback)(null)).catch(err => safeCb(callback)(err));
  }

  /**
   * Gets all available info on a user
   *
   * @param  {Function} [callback] - function(user)
   * @return {Promise}
   */
  getCurrentUser(callback?: any) {
    safeCb(callback)(this.currentUser);
    return Promise.resolve(this.currentUser);
  }

  /**
   * Gets all available info on a user
   *
   * @return {Object}
   */
  getCurrentUserSync() {
    return this.currentUser;
  }

  /**
   * Checks if user is logged in
   * @returns {Promise}
   */
  isLoggedIn(callback?: any) {
    let is = this.currentUser.hasOwnProperty('role');
    safeCb(callback)(is);
    return Promise.resolve(is);
  }

  /**
   * Checks if user is logged in
   * @returns {Boolean}
   */
  isLoggedInSync() {
    return this.currentUser.hasOwnProperty('role');
  }

  /**
   * Check if a user is an admin
   *
   * @param  {Function|*} callback - optional, function(is)
   * @return {Promise}
   */
  isAdmin(callback?: any) {
    return this.getCurrentUser().then(user => {
      var is = user.role === 'admin';
      safeCb(callback)(is);
      return is;
    });
  }

  isAdminSync() {
    return this.currentUser.role === 'admin';
  }

  /**
   * Get auth token
   *
   * @return {String} - a token string used for authenticating
   */
  getToken() {
    return localStorage.getItem('id_token');
  }
};
