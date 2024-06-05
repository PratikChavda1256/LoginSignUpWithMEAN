// import { Component } from '@angular/core';
// import { AuthserviceService } from '../authservice.service';
// // import { AuthService } from './auth.service';

// @Component({
//   selector: 'app-login',
//   standalone: true,
//   imports: [],
//   templateUrl: './login.component.html',
//   styleUrl: './login.component.css'
// })
// export class LoginComponent {

//   constructor(private authService: AuthserviceService) {}


// }


import { Component } from '@angular/core';
import { AuthserviceService } from '../authservice.service';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router} from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  imports: [ReactiveFormsModule],
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private authService: AuthserviceService, private fb: FormBuilder, private router: Router) {
    // Initializing the login form with FormBuilder
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
    console.log(authService.isLoggedIn);
    
  }

  // Method to handle user login
  loginUser() {
    try {
      // Check if the login form is valid
      if (this.loginForm.valid) {
        const userData = this.loginForm.value;

        // Call the login service method from the authentication service
        this.authService.loginUser(userData).subscribe((response: any) => {
          // Handle login success
          if (response?.success) {
            // Set login token in local storage
            localStorage.setItem("loginToken", response.token);
           
            this.router.navigate(['']);
          
            this.authService.isLoggedIn = true;
          }
          console.log(response);
        }, error => {
        
          console.error('Error occurred while logging in:', error);
        });
      }
    } catch (error) {
      
      console.error('An unexpected error occurred while logging in:', error);
    }
  }
}
