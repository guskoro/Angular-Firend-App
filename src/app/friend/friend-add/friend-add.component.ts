import { Component, OnInit } from '@angular/core';
import { Friend } from '../friend.model';
import { FriendsService } from '../friends.service';

@Component({
  selector: 'app-friend-add',
  templateUrl: './friend-add.component.html',
  styleUrls: ['./friend-add.component.css']
})
export class FriendAddComponent implements OnInit {
  constructor(private friendsService: FriendsService) {}

  ngOnInit() {}

  onAddFriend(
    inputName: HTMLInputElement,
    inputEmail: HTMLInputElement,
    inputContact: HTMLInputElement
  ) {
    this.friendsService.addFriend(
      new Friend(inputName.value, inputEmail.value, inputContact.value)
    );
  }
}
