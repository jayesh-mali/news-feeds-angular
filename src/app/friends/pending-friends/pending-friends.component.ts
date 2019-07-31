import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FriendService } from 'src/app/services/friend.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-pending-friends',
  templateUrl: './pending-friends.component.html',
  styleUrls: ['./pending-friends.component.css']
})
export class PendingFriendsComponent implements OnInit {


  constructor(private activatedRoute: ActivatedRoute, private friendService: FriendService, private toastr: ToastrService) { }

  pendingFriends = [];

  ngOnInit() {
    this.pendingFriends = this.activatedRoute.snapshot.data.pendingFriends;
  }

  removeFriend(friendId,index){
    let params = {
      friend_id:friendId
    }
    this.friendService.removeFriend(params).subscribe((res) => {
      console.log(res);      
      this.pendingFriends.splice(index,1);
      this.toastr.success(res.message, 'Success');
    }, (badResponse) => {
      console.log("badResponse");
      console.log(badResponse);
      this.toastr.error(badResponse.error, 'Error');
    });
  }

}
