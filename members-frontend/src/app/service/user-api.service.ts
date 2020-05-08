import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserApiService {

  private adminUrl = 'http://localhost:8080/pjApi/admin';

  constructor(private httpClient: HttpClient) { }

  getAdminBoard(): Observable<string> {
    return this.httpClient.get(this.adminUrl, { responseType: 'text' });
  }
}
