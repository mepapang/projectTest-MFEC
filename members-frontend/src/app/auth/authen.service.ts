import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthLoginInfo } from './login-info';
import { RegisterInfo } from './register-info';
import { Observable } from 'rxjs';
import { JwtResponse } from './jwt-response';


@Injectable({
  providedIn: 'root'
})
export class AuthenService {

  private loginUrl = 'http://localhost:8080/pjApi/auth/login';
  private registerUrl = 'http://localhost:8080/pjApi/auth/register';
  constructor(private http: HttpClient) { }

  attemptAuth(credentials: AuthLoginInfo): Observable<JwtResponse> {
    return this.http.post<JwtResponse>(this.loginUrl, credentials);
  }

  register(info: RegisterInfo): Observable<string> {
    return this.http.post<string>(this.registerUrl, info);
  }
}
