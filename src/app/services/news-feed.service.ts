import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { newsFeedAPI } from '../constants/app-config';

@Injectable({
  providedIn: 'root'
})
export class NewsFeedService {

  constructor(private httpClient: HttpClient) { }

  getNewsFeeds():any{
    return this.httpClient.get(newsFeedAPI);
  }
}

