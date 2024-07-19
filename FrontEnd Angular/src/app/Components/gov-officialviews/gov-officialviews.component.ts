import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HeaderGovComponent } from '../header-gov/header-gov.component';


interface Feedback { // Define the Feedback interface
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
  styleUrl: './gov-officialviews.component.css'
})
export class GovOfficialviewsComponent implements OnInit {
  feedback: Feedback[] = [
    {
      id: 1,
      message: 'This firm bill should not be passed at all. Everything becomes too costly.',
      category: 'Economy',
      sentiment: 'negative'
    },
    {
      id: 2,
      message: 'We reject the government should have a sit down and restructure this.',
      category: 'Politics',
      sentiment: 'negative'
    },
    {
      id: 3,
      message: 'This bill is too much heavy on us Mr President. We don\'t want it.',
      category: 'Economy',
      sentiment: 'negative'
    },
    // Add more dummy data here...
  ];

  aiSummary: any = {
    overallSentiment: 'negative',
    topConcerns: ['Economy', 'Politics'],
    emergingThemes: ['Cost of living', 'Government accountability'],
    actionableRecommendations: ['Reconsider the bill', 'Engage in public dialogue']
  };

  constructor() { }

  ngOnInit(): void {
  }

} 


