import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IncidentsService {

  private apiUrl = 'https://api.citizensconnect360.com/incidents';

  constructor(private http: HttpClient) { }

  getIncidents(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  reportIncident(incident: any): Observable<any> {
    return this.http.post(this.apiUrl, incident);
  }

  getIncident(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  addComment(incidentId: number, comment: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/${incidentId}/comments`, comment);
  }

  updateIncident(id: number, incident: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, incident);
  }

  deleteIncident(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}