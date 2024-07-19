import { Component } from '@angular/core';
import { EmailService } from '../../Services/email.service';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-resetpassword',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, RouterModule],
  templateUrl: './resetpassword.component.html',
  styleUrl: './resetpassword.component.css'
})
export class ResetpasswordComponent {
  // constructor(private emailService: EmailService) {}

  // onSubmit(form: any) {
  //   const email = form.value.email; // Get the email from the form
  //   this.emailService.sendResetEmail(email)
  //     .subscribe(
  //       () => {
  //         // Success! Handle success message (e.g., display a confirmation)
  //         console.log('Reset email sent successfully');
  //       },
  //       (error) => {
  //         // Error sending email
  //         console.error('Error sending reset email:', error);
  //         // Display an error message to the user
  //       }
  //     );
  //   }
  }
