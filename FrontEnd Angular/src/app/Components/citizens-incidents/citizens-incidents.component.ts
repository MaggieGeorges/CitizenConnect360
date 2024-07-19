import { Component, OnInit } from '@angular/core';
import { IncidentsService } from '../../Services/incidents.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import { HttpClientModule } from '@angular/common/http'; 
import { HeaderLoginComponent } from '../header-login/header-login.component';

@Component({
  selector: 'app-citizens-incidents',
  standalone: true,
  imports: [CommonModule, FormsModule, HeaderComponent, RouterModule, FooterComponent, ReactiveFormsModule, HttpClientModule, HeaderLoginComponent],
  templateUrl: './citizens-incidents.component.html',
  styleUrls: ['./citizens-incidents.component.css']
})
export class CitizensIncidentsComponent implements OnInit {
  incidentForm: FormGroup;
  commentForm: FormGroup;
  incidents: any[] = [];

  constructor(private incidentService: IncidentsService, private formBuilder: FormBuilder) {
    this.incidentForm = this.formBuilder.group({
      category: ['', Validators.required],
      description: ['', Validators.required],
      location: ['', Validators.required],
      datetime: ['', Validators.required],
      media: ['']
    });

    this.commentForm = this.formBuilder.group({
      text: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.getIncidents();
  }

  getIncidents(): void {
    this.incidentService.getIncidents().subscribe(incidents => {
      this.incidents = incidents;
    });
  }

  reportIncident(): void {
    if (this.incidentForm.valid) {
      const incident = this.incidentForm.value;
      this.incidentService.reportIncident(incident).subscribe(() => {
        this.getIncidents();
        this.incidentForm.reset();
      });
    }
  }

  addComment(incidentId: number): void {
    if (this.commentForm.valid) {
      const comment = this.commentForm.value;
      this.incidentService.addComment(incidentId, comment).subscribe(() => {
        this.getIncidents();
        this.commentForm.reset();
      });
    }
  }
}