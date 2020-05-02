import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeApiService {

  ApiUrl = 'http://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=a3750354a7be412f8cfc216288be5b68';
  constructor(private httpClient: HttpClient) { }

  getNews() {
    return this.httpClient.get<any>(this.ApiUrl);
  }
}
