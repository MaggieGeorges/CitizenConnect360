import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private apiUrl = 'https://api.citizensconnect360.com/profile';

  constructor(private http: HttpClient) { }

  getProfileData(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
