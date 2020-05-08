import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../auth/token-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  roles: string[];
  authority: string;
  userName: string;

  constructor(private token: TokenStorageService, private route: Router) { }

  ngOnInit() {
    if (this.token.getToken()) {
      this.roles = this.token.getAuthorities();
      this.userName = this.token.getUsername();
      this.roles.every( role => {
        if (role === 'admin') {
          this.authority = 'admin';
          return false;
        }
      });
    }
  }
  logOut() {
    this.token.logOut();
    this.route.navigate(['/home']);
  }

}
