import { EventEmitter, Injectable } from '@angular/core';
import { Friend } from './friend.model';
import { Http, Response, Headers } from '@angular/http';
//import 'rxjs/Rx';
import { map, catchError } from 'rxjs/operators';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FriendsService {
  friendAdded = new EventEmitter<void>();

  private friendList: Friend[] = [];

  constructor(private http: Http) {}

  loadFriends() {
    //return this.http.get('http://localhost:3000/api/friends').map(
    //  (response: Response) => {
    //    const data = response.json();
    //    this.friendList = data;
    //    return data;
    //  },
    //  error => console.log(error)
    //);
    return this.http.get('/api/friends').pipe(
      map((response: Response) => {
        const data = response;
        this.friendList = <Friend[]>(<unknown>data);
        return data;
      }),
      catchError(error => error)
    );
  }

  addFriend(newFriendInfo) {
    //this.friendList.push(newFriendInfo);
    //this.friendAdded.emit();
    const headers = new Headers({ 'Content-Type': 'application/json' });

    this.http
      .post('/api/friends', { info: newFriendInfo }, { headers: headers })
      .subscribe(
        (response: Response) => {
          const data = response.json();
          this.friendList.push(data);
          this.friendAdded.emit();
        },
        error => console.log(error)
      );
  }

  getFriends() {
    return this.friendList.slice();
  }
}
