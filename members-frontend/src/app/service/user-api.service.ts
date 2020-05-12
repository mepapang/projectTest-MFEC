import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserApiService {

  private userUrl = 'http://localhost:8080/pjApi/user';

  constructor(private httpClient: HttpClient) { }

  getUserByUsername(username): any {
    return this.httpClient.get(this.userUrl + '/' + username);
  }

  updateUserProfile(user): any {
    return this.httpClient.put(this.userUrl + '/update', user);
  }
}
