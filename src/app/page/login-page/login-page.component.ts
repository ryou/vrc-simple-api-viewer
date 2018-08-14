import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VrcApiService } from '../../vrc-api.service';
import { StateService } from '../../state.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  username: string = '';
  password: string = '';

  constructor(
    private router: Router,
    private vrcApiService: VrcApiService,
    private stateService: StateService
  ) {}

  ngOnInit() {}

  login() {
    this.stateService.loading = true;
    this.vrcApiService.auth(this.username, this.password)
      .subscribe(() => {
        this.stateService.loading = false;
        this.router.navigateByUrl('/authed/friends');
      });
  }

}
