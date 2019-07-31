import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FriendService } from 'src/app/services/friend.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-received-friends',
  templateUrl: './received-friends.component.html',
  styleUrls: ['./received-friends.component.css']
})
export class ReceivedFriendsComponent implements OnInit {


  constructor(private activatedRoute: ActivatedRoute, private friendService: FriendService, private toastr: ToastrService) { }

  receivedFriends = [];

  ngOnInit() {
    this.receivedFriends = this.activatedRoute.snapshot.data.receivedFriends;
  }

  removeFriend(friendId,index){
    let params = {
      friend_id:friendId
    }
    this.friendService.removeFriend(params).subscribe((res) => {
      console.log(res);      
      this.receivedFriends.splice(index,1);
      this.toastr.success(res.message, 'Success');
    }, (badResponse) => {
      console.log("badResponse");
      console.log(badResponse);
      this.toastr.error(badResponse.error, 'Error');
    });
  }

  addFriend(friendId,index){
    let params = {
      friend_id:friendId
    }
    this.friendService.addFriend(params).subscribe((res) => {
      console.log(res);      
      this.toastr.success(res.message, 'Success');
      this.receivedFriends.splice(index,1);
    }, (badResponse) => {
      console.log("badResponse");
      console.log(badResponse);
      this.toastr.error(badResponse.error, 'Error');
    });
  }
}
