import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Member } from '../model/member.model';

@Injectable({
  providedIn: 'root'
})
export class MemberApiService {

  private baseUrl = 'http://localhost:8080/pjApi';

  constructor(private httpClient: HttpClient) { }

  getAllMembers(): Observable<Member[]> {
    return this.httpClient.get<Member[]>(this.baseUrl + '/member');
  }

  getMemberById(id: number): Observable<Member> {
    return this.httpClient.get<Member>(this.baseUrl + '/member/' + id);
  }

  createMember(member: Member): Observable<Member> {
    return this.httpClient.post<Member>(this.baseUrl + '/add', member);
  }

  updateMember(member: Member): Observable<Member> {
    return this.httpClient.put<Member>(this.baseUrl + '/update', member);
  }

  deleteMember(id: number) {
    return this.httpClient.delete(this.baseUrl + '/del/' + id);
  }
}
