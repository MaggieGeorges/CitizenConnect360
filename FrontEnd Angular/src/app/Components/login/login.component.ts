import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterModule } from '@angular/router';
import { AuthenticationService } from '../../Services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private authenticationService: AuthenticationService, private router: Router) { }

  login(username: string, password: string) {
    this.authenticationService.authenticate(username, password).subscribe(() => {
      this.authenticationService.login('some_role'); // Pass the role here
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
  }
}