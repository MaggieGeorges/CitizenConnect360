import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthenticationService } from '../Services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class CitizenGuard implements CanActivate {
  constructor(private authenticationService: AuthenticationService, private router: Router) { }

  async canActivate(): Promise<boolean> {
    const userRole = await this.authenticationService.getUserRole$().toPromise();
    if (userRole === 'citizen') {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}