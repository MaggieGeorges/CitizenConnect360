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

  constructor() { }

  ngOnInit(): void {
  }

  onSelectCategory(category: string): void {
    this.selectedCategory = category;
    this.polls = this.polls.filter(poll => poll.category === category);
  }

  onVote(pollId: number, answer: string): void {
    const poll = this.polls.find(p => p.id === pollId);
    if (poll) {
      if (!poll.votes[answer]) {
        poll.votes[answer] = 1;
      } else {
        poll.votes[answer]++;
      }
      poll.totalVotes++;
    }
  }
}