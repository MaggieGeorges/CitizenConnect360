import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterModule } from '@angular/router';
import { AuthenticationService } from '../../Services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, RouterModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})

export class RegisterComponent {
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  role: string = 'citizen'; // default role is citizen

  constructor(private authenticationService: AuthenticationService, private router: Router) { }

  register() {
    if (this.password === this.confirmPassword) {
      this.authenticationService.authenticate(this.email, this.password).subscribe(() => {
        this.authenticationService.login(this.role); // Pass the role here
        this.authenticationService.getUserRole$().subscribe(userRole => {
          if (userRole === 'citizen') {
            this.router.navigate(['/citizen-dashboard']);
          } else if (userRole === 'gov_official') {
            this.router.navigate(['/gov-official-dashboard']);
          } else if (userRole === 'admin') {
            this.router.navigate(['/admin-dashboard']);
          }
        });
      });
    } else {
      alert('Passwords do not match');
    }
  }
}