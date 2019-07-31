import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { apiEndPoint } from '../constants/app-config';

@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.css']
})
export class NewsFeedComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  newsFeeds = [];
  apiEndPoint = apiEndPoint;
  ngOnInit() {
    this.newsFeeds = this.activatedRoute.snapshot.data.newsFeeds;
  }

}
