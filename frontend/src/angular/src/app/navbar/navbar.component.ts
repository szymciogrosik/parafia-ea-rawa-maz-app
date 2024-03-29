import { Component, OnInit } from '@angular/core';
import {User} from '../_models';
import {Router} from '@angular/router';
import {AuthenticationService} from '../_services';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  currentUser: User;
  isCollapse: boolean;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

  ngOnInit() {
    this.isCollapse = true;
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/']);
  }
}
