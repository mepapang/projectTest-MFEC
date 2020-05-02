import { Component, OnInit } from '@angular/core';
import { faMale, faUser, faLock, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  iconName = faMale;
  iconUser = faUser;
  iconPassword = faLock;
  iconEmail = faEnvelope;

  formEdit = new FormGroup({
    nickname: new FormControl(''),
    email: new FormControl(''),
    username: new FormControl(''),
    password: new FormControl('')
  });
  constructor() { }

  ngOnInit() {
  }

}
