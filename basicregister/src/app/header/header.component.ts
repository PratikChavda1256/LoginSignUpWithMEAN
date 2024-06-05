import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { AuthserviceService } from '../authservice.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  instance:any;

  constructor(private router: Router,private authService: AuthserviceService) {
    this.instance = authService;
  }

  // Method to handle user logout
  logout() {
    try {
      // Remove the login token from local storage
      localStorage.removeItem('loginToken'); 

      // Update the authentication service to reflect user logged out
      this.authService.isLoggedIn = false;

      // Navigate user to the login page
      this.router.navigateByUrl('/login'); 
    } catch (error) {
      console.error('Error occurred while logging out:', error);
    }
  }
}
