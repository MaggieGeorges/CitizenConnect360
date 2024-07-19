import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private apiUrl = 'https://your-api-url.com';
  private isLoggedIn$ = new BehaviorSubject<boolean>(false);
  private userRole$ = new BehaviorSubject<string>('');

  constructor(private http: HttpClient) { }

  get isLoggedIn(): Observable<boolean> {
    return this.isLoggedIn$.asObservable();
  }

  getUserRole$(): Observable<string> {
    return this.userRole$.asObservable();
  }

  login(role: string): void {
    this.isLoggedIn$.next(true);
    this.userRole$.next(role);
  }

  logout(): void {
    this.isLoggedIn$.next(false);
    this.userRole$.next('');
  }

  isLoggedInValue(): boolean {
    return this.isLoggedIn$.getValue();
  }

  getUserRoleValue(): string {
    return this.userRole$.getValue();
  }

  authenticate(username: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/authenticate`, { username, password });
  }

  getUserDetails(): Observable<any> {
    return this.http.get(`${this.apiUrl}/user-details`);
  }

  isGovOfficial(): boolean {
    return this.userRole$.getValue() === 'gov_official';
  }

  isAdmin(): boolean {
    return this.userRole$.getValue() === 'admin';
  }
}