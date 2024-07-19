import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header-gov',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './header-gov.component.html',
  styleUrl: './header-gov.component.css'
})
export class HeaderGovComponent {

}
