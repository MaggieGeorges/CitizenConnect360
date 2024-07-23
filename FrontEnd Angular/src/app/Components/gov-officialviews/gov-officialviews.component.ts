import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HeaderGovComponent } from '../header-gov/header-gov.component';
import { HttpClient } from '@angular/common/http';

interface Feedback {
  id: number;
  message: string;
  category: string;
  sentiment: string; // positive, negative, neutral
}

@Component({
  selector: 'app-gov-officialviews',
  standalone: true,
  imports: [CommonModule, HeaderGovComponent],
  templateUrl: './gov-officialviews.component.html',
  styleUrls: ['./gov-officialviews.component.css']
})
export class GovOfficialviewsComponent implements OnInit {
  feedback: Feedback[] = [];
  aiSummary: any = {};

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.loadFeedback();
    this.loadAISummary();
  }

  loadFeedback(): void {
    this.http.get<Feedback[]>('http://localhost:3000/api/feedback')
      .subscribe(feedback => this.feedback = feedback);
  }

  loadAISummary(): void {
    this.http.get<any>('http://localhost:3000/api/ai-summary')
      .subscribe(summary => this.aiSummary = summary);
  }
}
