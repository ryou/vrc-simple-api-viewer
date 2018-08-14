import { Injectable } from '@angular/core';
import * as Rx from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  private subject: Rx.Subject<string>;

  get observable(): Rx.Observable<string> {
    return this.subject.asObservable();
  }

  constructor() {
    this.subject = new Rx.Subject<string>();
  }

  launchToast(message: string) {
    this.subject.next(message);
  }
}
