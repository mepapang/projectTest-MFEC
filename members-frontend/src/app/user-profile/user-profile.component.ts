import { Component, OnInit } from '@angular/core';
import { faMale, faUser, faLock, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TokenStorageService } from '../auth/token-storage.service';
import { UserApiService } from '../service/user-api.service';
import { User } from '../model/user.model';
import { ToastService } from '../service/toast.service';


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
    nickname: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required)
  });

  userForm: User;
  userName: string;
  show = false;
  autohide = true;
  constructor(private token: TokenStorageService,
              private userService: UserApiService,
              public toastService: ToastService) { }

  ngOnInit() {
    if (this.token.getToken()) {
      this.userName = this.token.getUsername();
      this.getUserProfile(this.userName);
    }
  }

  getUserProfile(userName: string) {
    this.userService.getUserByUsername(userName).subscribe((data) => {
      this.userForm = data;
      this.formEdit.patchValue({
        nickname: data.nickname,
        email: data.email
      });
    });
  }

  onCancel() {
    this.getUserProfile(this.userName);
  }

  onSubmit() {
    this.userForm.nickname = this.formEdit.value.nickname;
    this.userForm.email = this.formEdit.value.email;
    this.userService.updateUserProfile(this.userForm).subscribe( (data) => {
      if (data) {
        this.showSuccessToast();
      }
    }, error => {
      console.log('Error : ', error);
      this.showDangerToast();
    });
  }

  showSuccessToast() {
    this.toastService.show('User profile updated successfully', {
      classname: 'bg-success text-light',
      delay: 3000 ,
      autohide: true,
    });
  }

  showDangerToast() {
    this.toastService.show('Error! Can not update user profile.' , {
      classname: 'bg-danger text-light',
      delay: 3000 ,
      autohide: true,
    });
  }
}
