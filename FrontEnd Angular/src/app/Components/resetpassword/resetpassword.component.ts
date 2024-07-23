import { Component } from '@angular/core';
import { EmailService } from '../../Services/email.service';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resetpassword',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, RouterModule],
  templateUrl: './resetpassword.component.html',
  styleUrl: './resetpassword.component.css'
})
export class ResetpasswordComponent {
  email: string = '';

  constructor(private emailService: EmailService, private router: Router) {}

  submitEmail() {
    this.emailService.sendResetEmail(this.email).subscribe(
      response => {
        alert('Reset email sent');
        this.router.navigate(['/login']);
      },
      error => {
        alert('Error sending reset email');
      }
    );
  }
}
  
