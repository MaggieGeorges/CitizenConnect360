import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import {FormGroup, FormBuilder,  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from '../header/header.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import { HeaderLoginComponent } from '../header-login/header-login.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-citizens-polls',
  standalone: true,
  imports: [CommonModule, FormsModule, HeaderComponent, RouterModule, FooterComponent, ReactiveFormsModule, HttpClientModule, HeaderLoginComponent],
  templateUrl: './citizens-polls.component.html',
  styleUrl: './citizens-polls.component.css'
})
export class CitizensPollsComponent implements OnInit {
  polls: any[] = [
    {
      id: 1,
      question: 'Should the government invest in museums?',
      description: 'This is a sample poll question.',
      answers: ['Yes', 'No'],
      votes: [10, 20],
      category: 'Politics'
    },
    {
      id: 2,
      question: 'How would you rate the public health service?',
      description: 'This is another sample poll question.',
      answers: ['Excellent', 'Good', 'Poor'],
      votes: [30, 20, 10],
      category: 'Health'
    }
  ];

  categories: any[] = [
    { name: 'Politics' },
    { name: 'Education' },
    { name: 'Health' }
  ];

  selectedCategory: string = '';
  votedPolls: number[] = []; 

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  onSelectCategory(category: string): void {
    this.selectedCategory = category;
    this.polls = this.polls.filter(poll => poll.category === category);
  }

  onVote(pollId: number, answer: string): void {
    if (this.hasVoted(pollId)) {
        alert('You have already voted for this poll.');
        return;
    }

    // Add vote through an API call
    this.http.post(`/api/polls/${pollId}/vote`, { userId: this.getUserId(), option: answer })
        .subscribe(() => {
            // Update local vote counts
            const poll = this.polls.find(p => p.id === pollId);
            if (poll) {
                poll.results[answer] = (poll.results[answer] || 0) + 1;
            }
        });
}

hasVoted(pollId: number): boolean {
    // Check if the user has voted for this poll
    return this.votedPolls.includes(pollId);
}

getUserId(): number {
    // Implement logic to get the current user's ID
    return 1; // Replace with actual user ID retrieval
}
}
