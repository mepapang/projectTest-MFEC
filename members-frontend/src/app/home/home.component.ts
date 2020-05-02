import { Component, OnInit } from '@angular/core';
import { HomeApiService } from '../service/home-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  newsList: any;
  constructor(
    private homeService: HomeApiService
    ) { }

  ngOnInit() {
    this.getdataNews();
  }

  getdataNews() {
    this.homeService.getNews().subscribe((data) => {
      this.newsList = data.articles;
    });
  }

}
