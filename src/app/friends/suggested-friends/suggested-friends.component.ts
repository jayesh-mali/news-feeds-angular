import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FriendService } from 'src/app/services/friend.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-suggested-friends',
  templateUrl: './suggested-friends.component.html',
  styleUrls: ['./suggested-friends.component.css']
})
export class SuggestedFriendsComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private friendService: FriendService, private toastr: ToastrService) { }

  suggestedFriends = [];

  ngOnInit() {
    this.suggestedFriends = this.activatedRoute.snapshot.data.suggestedFriends;
  }

  addFriend(friendId,index){
    let params = {
      friend_id:friendId
    }
    this.friendService.addFriend(params).subscribe((res) => {
      console.log(res);      
      this.toastr.success(res.message, 'Success');
      this.suggestedFriends.splice(index,1);
    }, (badResponse) => {
      console.log("badResponse");
      console.log(badResponse);
      this.toastr.error(badResponse.error, 'Error');
    });
  }

}
