import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VrcApiService, UserData, FriendData } from '../../vrc-api.service';
import { StateService } from '../../state.service';

@Component({
  selector: 'app-user-detail-page',
  templateUrl: './user-detail-page.component.html',
  styleUrls: ['./user-detail-page.component.css']
})
export class UserDetailPageComponent implements OnInit {

  user: UserData | FriendData = null;

  get isFriend() {
    return VrcApiService.isFriendData(this.user);
  }

  constructor(
    private route: ActivatedRoute,
    private vrcApiService: VrcApiService,
    private stateService: StateService
  ) { }

  ngOnInit() {
    const name = this.route.snapshot.paramMap.get('name');

    this.route.paramMap.subscribe(paramsMap => {
      const name = paramsMap.get('name');

      setTimeout(() => {
        this.stateService.loading = true;
        this.vrcApiService.getUserByName(name)
        .subscribe(
          (res) => {
            console.log(res);

            this.user = res;
            this.stateService.loading = false;
          },
          error => console.error(error)
        );
      }, 0);
    });
  }

}
