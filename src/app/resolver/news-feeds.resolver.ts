import { Injectable, Injector } from '@angular/core';

import { Resolve } from '@angular/router';
import { ActivatedRouteSnapshot } from '@angular/router';
import { NewsFeedService } from '../services/news-feed.service';

@Injectable()
export class NewsFeedsResolver implements Resolve<any> {
  constructor(public newsFeedService:NewsFeedService) {}

  resolve(route:ActivatedRouteSnapshot) {
    return this.newsFeedService.getNewsFeeds();     
  }
}