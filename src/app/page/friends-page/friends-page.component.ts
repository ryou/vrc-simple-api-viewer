import { Component, OnInit } from '@angular/core';
import { VrcApiService, UserData } from '../../vrc-api.service';
import { StateService } from '../../state.service';

@Component({
  selector: 'app-friends-page',
  templateUrl: './friends-page.component.html',
  styleUrls: ['./friends-page.component.css']
})
export class FriendsPageComponent implements OnInit {

  friends: UserData[] = [];

  constructor(
    private vrcApiService: VrcApiService,
    private stateService: StateService
  ) {}

  ngOnInit() {
    setTimeout(() => {
      this.stateService.loading = true;
      this.vrcApiService.getFriends()
      .subscribe(
        (res) => {
          console.log(res);

          this.friends = res;
          this.stateService.loading = false;
        },
        error => console.error(error)
      );
    }, 0);
  }

}
