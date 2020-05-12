import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../auth/token-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLoggedIn = false;
  userName: string;

  constructor(private token: TokenStorageService, private route: Router) { }

  ngOnInit() {
    if (this.token.getToken()) {
      this.isLoggedIn = true;
      this.userName = this.token.getUsername();
    } else {
      this.isLoggedIn = false;
    }
  }
  logOut() {
    this.isLoggedIn = false;
    this.token.logOut();
    this.route.navigate(['/home']);
  }

}
