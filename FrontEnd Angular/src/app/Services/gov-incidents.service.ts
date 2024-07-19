import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Incident {
  id: number;
  description: string;
  location: string;
  time: string;
  status: 'Under Review' | 'Resolved';
  userId: number;
}

@Injectable({
  providedIn: 'root'
})
export class GovIncidentsService {

  // Dummy data
  private incidents: Incident[] = [
    { id: 1, description: 'Incident 1', location: 'Location 1', time: '2024-07-16 12:00', status: 'Under Review', userId: 101 },
    { id: 2, description: 'Incident 2', location: 'Location 2', time: '2024-07-16 13:00', status: 'Resolved', userId: 102 },
    { id: 3, description: 'Incident 3', location: 'Location 3', time: '2024-07-16 14:00', status: 'Under Review', userId: 103 }
  ];
  constructor() { }

  getIncidents(): Observable<Incident[]> {
    return of(this.incidents);
  }

  updateIncidentStatus(id: number, status: 'Under Review' | 'Resolved'): Observable<Incident> {
    const incident = this.incidents.find(i => i.id === id);
    if (incident) {
      incident.status = status;
    }
    return of(incident!);
  }

  // Mock AI summary
  getAISummary(): Observable<string> {
    return of("People reject the bill. Too many complaints, people requesting for the bill to be reconsidered before being passed.");
  }
}
