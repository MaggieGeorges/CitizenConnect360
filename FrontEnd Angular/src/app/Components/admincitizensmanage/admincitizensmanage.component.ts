import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { HeaderAdminComponent } from '../header-admin/header-admin.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-admincitizensmanage',
  standalone: true,
  imports: [CommonModule, FooterComponent, HeaderAdminComponent, RouterModule],
  templateUrl: './admincitizensmanage.component.html',
  styleUrl: './admincitizensmanage.component.css'
})
export class AdmincitizensmanageComponent {
  title = 'Citizens Connect360';

  users = [
    { name: 'Cyrus Murimi', email: 'cyrus254@gmail.com', status: 'Active' },
    { name: 'Christine Rapudo', email: 'chrisrapudo@gmail.com', status: 'Suspended' }
  ];

  usersAwaitingApproval = [
    { name: 'Karen Kathure', email: 'kk124@gmail.com' },
    { name: 'Raphael Onyango', email: 'onyangoraph@gmail.com' }
  ];

  deleteUser(user: any) {
    console.log(`Delete user: ${user.name}`);
  }

  approveUser(user: any) {
    console.log(`Approve user: ${user.name}`);
  }

  rejectUser(user: any) {
    console.log(`Reject user: ${user.name}`);
  }
}