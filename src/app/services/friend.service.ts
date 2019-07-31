import { Injectable } from '@angular/core';
import { activeFriendsAPI, removeFriendAPI, receivedFriendsAPI, pendingFriendsAPI, addFriendAPI, suggestedFriendsAPI } from '../constants/app-config';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FriendService {

  constructor(private httpClient: HttpClient) { }

  addFriend(params):any{
    return this.httpClient.get(addFriendAPI, { params: params });
  }

  removeFriend(params):any{
    return this.httpClient.delete(removeFriendAPI, { params: params });
  }

  getSuggestedFriends():any{
    return this.httpClient.get(suggestedFriendsAPI);
  }
  
  getActiveFriends():any{
    return this.httpClient.get(activeFriendsAPI);
  }

  getPendingFriends():any{
    return this.httpClient.get(pendingFriendsAPI);
  }

  getReceivedFriends():any{
    return this.httpClient.get(receivedFriendsAPI);
  }
}
