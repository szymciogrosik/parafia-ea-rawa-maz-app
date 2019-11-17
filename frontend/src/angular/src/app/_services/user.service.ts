﻿import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../_models';
import {Subject} from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService {

    loggedUser: User = new User();
    loggedUserSubject = new Subject<User>();

    constructor(private http: HttpClient) { }

    setLoggedUser(user: User) {
      this.loggedUser = user;
      this.loggedUserSubject.next(user);
    }

    userHasRoleAdmin(): boolean {
      return (this.loggedUser.roles.find(role => role.name === 'ROLE_ADMIN') != null);
    }
}
