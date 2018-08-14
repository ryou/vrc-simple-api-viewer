import { Component, OnInit, Input } from '@angular/core';
import { VrcApiService, UserData } from '../../../../vrc-api.service';

@Component({
  selector: 'app-friend-list',
  templateUrl: './friend-list.component.html',
  styleUrls: ['./friend-list.component.css']
})
export class FriendListComponent implements OnInit {

  friends: UserData[] = [];

  isLoading: boolean = false;

  @Input() filter = '';

  @Input() status = 'online';

  get displayFriends(): UserData[] {
    if (this.filter === '') return this.friends;
    return this.friends.filter(friend => friend.displayName.toLowerCase().includes(this.filter.toLowerCase()));
  }

  constructor(
    private vrcApiService: VrcApiService
  ) { }

  ngOnInit() {
    this.loadFriends();
  }

  loadFriends() {
    const parameter = (this.status === 'online') ? 'false': 'true';

    this.isLoading = true;
    this.vrcApiService.getFriends(parameter)
      .subscribe(
        (res) => {
          console.log(res);

          this.friends = res;
          this.isLoading = false;
        },
        error => console.error(error)
      );
  }

}
