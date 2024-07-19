import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';



export interface Poll {
  id: number;
  category: string[];
  question: string;
  options: string[];
  results: { [key: string]: number };
}

@Injectable({
  providedIn: 'root'
})
export class GovpollsService {

  private polls: Poll[] = [
    {
      id: 1,
      category: ['Politics', 'Public Health'],
      question: 'All things being equal, should the government use public funds to invest in museums rather than sports arenas?',
      options: ['Yes', 'No'],
      results: { 'Yes': 45, 'No': 55 }
    },
    {
      id: 2,
      category: ['Health'],
      question: 'How would you rate the overall performance of our public health service in our country today?',
      options: ['Excellent', 'Good', 'Fair', 'Poor'],
      results: { 'Excellent': 20, 'Good': 40, 'Fair': 25, 'Poor': 15 }
    }
  ];

  constructor() { }

  getPolls(): Observable<Poll[]> {
    return of(this.polls);
  }

  createPoll(poll: Poll): Observable<Poll> {
    this.polls.push(poll);
    return of(poll);
  }

  updatePoll(poll: Poll): Observable<Poll> {
    const index = this.polls.findIndex(p => p.id === poll.id);
    if (index !== -1) {
      this.polls[index] = poll;
    }
    return of(poll);
  }

  deletePoll(id: number): Observable<boolean> {
    const index = this.polls.findIndex(p => p.id === id);
    if (index !== -1) {
      this.polls.splice(index, 1);
      return of(true);
    }
    return of(false);
  }
}
