import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { faMale, faUser, faLock, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { RegisterInfo } from '../auth/register-info';
import { AuthenService } from '../auth/authen.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  iconName = faMale;
  iconUser = faUser;
  iconPassword = faLock;
  iconEmail = faEnvelope;

  registerInfo: RegisterInfo;
  isSignedUp = false;
  isSignUpFailed = false;
  errorMessage = '';

  formRegister = new FormGroup({
    nickname: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  constructor(private authService: AuthenService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.registerInfo = new RegisterInfo(
        this.formRegister.value.nickname,
        this.formRegister.value.email,
        this.formRegister.value.username,
        this.formRegister.value.password);

    this.authService.register(this.registerInfo).subscribe(
      data => {
        this.isSignedUp = true;
        this.isSignUpFailed = false;
      },
      error => {
        this.errorMessage = error.error.message;
        this.isSignUpFailed = true;
      }
    );
  }
}
