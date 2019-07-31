import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FriendService } from 'src/app/services/friend.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-active-friends',
  templateUrl: './active-friends.component.html',
  styleUrls: ['./active-friends.component.css']
})
export class ActiveFriendsComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private friendService: FriendService, private toastr: ToastrService) { }

  activeFriends = [];

  ngOnInit() {
    this.activeFriends = this.activatedRoute.snapshot.data.activeFriends;
  }

  removeFriend(friendId,index){
    let params = {
      friend_id:friendId
    }
    this.friendService.removeFriend(params).subscribe((res) => {
      console.log(res);      
      this.activeFriends.splice(index,1);
      this.toastr.success(res.message, 'Success');
    }, (badResponse) => {
      console.log("badResponse");
      console.log(badResponse);
      this.toastr.error(badResponse.error, 'Error');
    });
  }

}
