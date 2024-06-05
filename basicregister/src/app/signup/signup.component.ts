// import { Component } from '@angular/core';
// import { AuthserviceService } from '../authservice.service';
// @Component({
//   selector: 'app-signup',
//   standalone: true,
//   imports: [],
//   templateUrl: './signup.component.html',
//   styleUrl: './signup.component.css'
// })
// export class SignupComponent {
// userData: any;

//   constructor(private authService: AuthserviceService) {}

//   registerUser(userData: any) {
//     console.log(userData, "registerUser");
//     this.authService.registerUser(userData).subscribe(response => {
//       console.log(response)
//       // Handle response
//     }, error => {
//       // Handle error
//     });
//   }
// }

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthserviceService } from '../authservice.service';
import { Router} from '@angular/router';
@Component({
  selector: 'app-signup',
  standalone: true,
  templateUrl: './signup.component.html',
  imports: [ReactiveFormsModule],
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  userDataForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthserviceService, private router: Router) {
    // Initializing the user data form with FormBuilder
    this.userDataForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      address: ['', Validators.required],
      answer: ['', Validators.required]
    });
  }

  // Method to handle user registration
  registerUser() {
    try {
      // Check if the user data form is valid
      if (this.userDataForm.valid) {
        const userData = this.userDataForm.value;

        // Call the register user service method from the authentication service
        this.authService.registerUser(userData).subscribe((response: any) => {
          // Handle registration success
          console.log(response);
          if (response?.success) {
            // Redirect user to login page after successful registration
            this.router.navigate(['login']);
          }
        }, error => {
          console.error('Error occurred while registering user:', error);
        });
      } else {
        console.log("pratik registerUser");
      }
    } catch (error) {
      console.error('An unexpected error occurred while registering user:', error);
    }
  }
}
