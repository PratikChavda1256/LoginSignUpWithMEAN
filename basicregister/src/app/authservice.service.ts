import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  isLoggedIn: Boolean = false;

  constructor(private http: HttpClient) {
    
   }
   registerUser(userData: any) {
    return this.http.post('http://localhost:8080/api/v1/auth/register', userData);
  }

  loginUser(userData: any) {
    return this.http.post('http://localhost:8080/api/v1/auth/login', userData);
  }


}
