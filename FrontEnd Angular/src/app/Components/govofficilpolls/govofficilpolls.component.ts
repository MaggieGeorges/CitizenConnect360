import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { GovpollsService, Poll } from '../../Services/govpolls.service';
import { FormsModule } from '@angular/forms';
import { HeaderGovComponent } from '../header-gov/header-gov.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-govofficilpolls',
  standalone: true,
  imports: [CommonModule, FooterComponent, FormsModule, HeaderGovComponent, RouterModule],
  templateUrl: './govofficilpolls.component.html',
  styleUrl: './govofficilpolls.component.css'
})
export class GovofficilpollsComponent implements OnInit {
  polls: Poll[] = [];
  newPoll: Poll = { id: 0, category: [], question: '', options: ['', ''], results: {} };
  categories = ['Politics', 'Elections', 'Education', 'Public Health', 'Community', 'Environmental', 'Transport'];

  constructor(private pollsService: GovpollsService) { }

  ngOnInit(): void {
    this.loadPolls();
  }

  loadPolls(): void {
    this.pollsService.getPolls().subscribe(polls => this.polls = polls);
  }

  createPoll(): void {
    this.newPoll.id = this.polls.length + 1; // simple ID assignment
    this.pollsService.createPoll(this.newPoll).subscribe(() => this.loadPolls());
    this.newPoll = { id: 0, category: [], question: '', options: ['', ''], results: {} };
  }

  deletePoll(id: number): void {
    this.pollsService.deletePoll(id).subscribe(() => this.loadPolls());
  }

  addOption(): void {
    this.newPoll.options.push('');
  }

  updatePoll(poll: Poll): void {
    this.pollsService.updatePoll(poll).subscribe(() => this.loadPolls());
  }
}