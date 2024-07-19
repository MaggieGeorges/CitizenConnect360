import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterModule } from '@angular/router';
import { HeaderLoginComponent } from '../header-login/header-login.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-citizens-profile',
  standalone: true,
  imports: [CommonModule, FormsModule, HeaderComponent, FooterComponent, ReactiveFormsModule, RouterModule, HttpClientModule, HeaderLoginComponent],
  templateUrl: './citizens-profile.component.html',
  styleUrl: './citizens-profile.component.css'
})
export class CitizensProfileComponent implements OnInit {
    profileImage: string = 'https://via.placeholder.com/150'; // default profile image
    name: string = '';
    occupation: string = '';
    email: string = '';
    location: string = '';
  
    constructor() { }
  
    ngOnInit(): void {
      // fetch profile data from API or storage
      const profileData = {
        name: 'Allan Ahmed',
        occupation: 'Creative PHP Web Developer',
        email: 'allanahmed@gmail.com',
        location: 'Kakamega'
      };
  
      this.name = profileData.name;
      this.occupation = profileData.occupation;
      this.email = profileData.email;
      this.location = profileData.location;
    }
  }