import { Component, OnInit } from '@angular/core';
import { GovIncidentsService, Incident } from '../../Services/gov-incidents.service';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { RouterModule } from '@angular/router';
import { HeaderGovComponent } from '../header-gov/header-gov.component';

@Component({
  selector: 'app-govofficialincidents',
  standalone: true,
  imports: [CommonModule,FooterComponent, HeaderComponent, RouterModule, HeaderGovComponent],
  templateUrl: './govofficialincidents.component.html',
  styleUrls: ['./govofficialincidents.component.css']
})
export class GovofficialincidentsComponent implements OnInit {
  incidents: Incident[] = [];
  aiSummary: string = '';

  constructor(private govIncidentsService: GovIncidentsService) { }

  ngOnInit(): void {
    this.govIncidentsService.getIncidents().subscribe(incidents => {
      this.incidents = incidents;
    });
    this.govIncidentsService.getAISummary().subscribe(summary => {
      this.aiSummary = summary;
    });
  }

  updateStatus(id: number, status: 'Under Review' | 'Resolved') {
    this.govIncidentsService.updateIncidentStatus(id, status).subscribe(updatedIncident => {
      const index = this.incidents.findIndex(i => i.id === updatedIncident.id);
      if (index !== -1) {
        this.incidents[index] = updatedIncident;
      }
    });
  }
}
