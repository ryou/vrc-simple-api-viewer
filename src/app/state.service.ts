import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  private _loading: boolean = false;

  constructor() {}

  get loading() {
    return this._loading;
  }
  set loading(isLoading) {
    this._loading = isLoading;
  }
}
