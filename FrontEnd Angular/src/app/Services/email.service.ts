import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private apiUrl = 'http://your-backend-api/send-reset-email'; // Replace with your API URL

  constructor(private http: HttpClient) { }

  sendResetEmail(email: string) {
    return this.http.post(this.apiUrl, { email: email });
  }
}
