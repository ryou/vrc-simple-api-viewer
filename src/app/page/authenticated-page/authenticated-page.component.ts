import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VrcApiService, UserData } from '../../vrc-api.service';
import { StateService } from '../../state.service';

@Component({
  selector: 'app-authenticated-page',
  templateUrl: './authenticated-page.component.html',
  styleUrls: ['./authenticated-page.component.css']
})
export class AuthenticatedPageComponent implements OnInit {

  onlineFriends: UserData[] = [];
  offlineFriends: UserData[] = [];

  filter: string = '';

  get displayOnlineFriends(): UserData[] {
    if (this.filter === '') return this.onlineFriends;
    return this.onlineFriends.filter(friend => friend.displayName.toLowerCase().includes(this.filter.toLowerCase()));
  }
  get displayOfflineFriends(): UserData[] {
    if (this.filter === '') return this.offlineFriends;
    return this.offlineFriends.filter(friend => friend.displayName.toLowerCase().includes(this.filter.toLowerCase()));
  }

  state: StateService;

  constructor(
    private vrcApiService: VrcApiService,
    private stateService: StateService,
    private router: Router
  ) { }

  ngOnInit() {
    this.state = this.stateService;

    this.vrcApiService.getFriends()
      .subscribe(
        (res) => {
          console.log(res);

          this.onlineFriends = res;
        },
        error => console.error(error)
      );

    this.vrcApiService.getFriends("true")
      .subscribe(
        (res) => {
          console.log(res);

          this.offlineFriends = res;
        },
        error => console.error(error)
      );
  }

  logout() {
    this.vrcApiService.logout()
      .subscribe(
        (res) => {
          console.log(res);
          this.router.navigateByUrl('/login');
        },
        error => console.error(error)
      );
  }
}
