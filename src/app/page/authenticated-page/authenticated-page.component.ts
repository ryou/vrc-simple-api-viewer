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

  filter: string = '';

  state: StateService;

  constructor(
    private vrcApiService: VrcApiService,
    private stateService: StateService,
    private router: Router
  ) { }

  ngOnInit() {
    this.state = this.stateService;
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
