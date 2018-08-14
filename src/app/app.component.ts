import { Component } from '@angular/core';
import * as Rx from 'rxjs';
import { ToastService } from './toast.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'vrc-simple-api-viewer';

  toastMessage = '';
  toastIsVisible = false;

  constructor(
    private toastService: ToastService
  ) {}

  ngOnInit() {
    this.toastService.observable.subscribe(message => {
      this.toastMessage = message;
      this.toastIsVisible = true;
      Rx.timer(5000)
        .subscribe(() => this.toastIsVisible = false);
    });
  }
}
