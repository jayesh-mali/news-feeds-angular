import { Injectable, Injector } from '@angular/core';

import { Resolve } from '@angular/router';
import { ActivatedRouteSnapshot } from '@angular/router';
import { FriendService } from '../services/friend.service';

@Injectable()
export class ReceivedFriendsResolver implements Resolve<any> {
  constructor(public friendService:FriendService) {}

  resolve(route:ActivatedRouteSnapshot) {
    return this.friendService.getReceivedFriends();     
  }
}