import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from '../../node_modules/rxjs';
import * as Operators from '../../node_modules/rxjs/operators';
import { environment } from '../environments/environment';

export interface UserData {
  id: string;
  username: string;
  displayName: string;
  currentAvatarImageUrl: string;
  currentAvatarThumbnailImageUrl: string;
  status: string;
  statusDescription: string;
  location: string;
  developerType: string;
  tags: string[];
}

export interface WorldData {
  id: string;
  name: string;
  authorName: string;
  imageUrl: string;
  thumbnailImageUrl: string;
}

export interface InstanceData {
  id: string;
  name: string;
  friends: boolean;
  private: boolean;
  users: UserData[];
}

@Injectable({
  providedIn: 'root'
})

export class VrcApiService {

  constructor(private http: HttpClient) { }

  private callApi<T>(method: string, action: string) {
    return this.http.request<T>(
      method,
      `${environment.apiBaseUrl}${action}`,
      {
        withCredentials: true,
      })
      .pipe(
        Operators.catchError((error) => {
          if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
          } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error(
              `Backend returned code ${error.status}, ` +
              `body was: ${error.error}`);

            window.location.href = "/login";
          }

          return throwError('error');
        })
      );
  }

  auth(name: string, password: string) {
    return this.callApi<any>('GET', `auth/login/${name}/${password}`);
  }

  logout() {
    return this.callApi<any>('GET', `auth/logout`);
  }

  getFriends(offline: string = "false"): Observable<UserData[]> {
    return this.callApi<UserData[]>('GET', `api/friends/${offline}`);
  }

  getUserByName(name: string): Observable<UserData> {
    return this.callApi<UserData>('GET', `api/users/${name}/name`);
  }

  getWorldInfo(worldId: string): Observable<WorldData> {
    return this.callApi<WorldData>('GET', `api/worlds/${worldId}`);
  }

  getInstanceInfo(worldId: string, instanceId: string): Observable<InstanceData> {
    return this.callApi<InstanceData>('GET', `api/worlds/${worldId}/${instanceId}`);
  }
}