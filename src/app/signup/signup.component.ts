import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm = new FormGroup({
    name: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('',[Validators.required]),
    password_confirmation: new FormControl('',[Validators.required]),
  });

  isSubmitted: any;


  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.isSubmitted = false;

  }

  signup() {
    this.isSubmitted = true;
    if (this.signupForm.valid) {
      this.authService.signup(this.signupForm.value).subscribe((res) => {
        this.router.navigate(['/login']);
      }, (badResponse) => {
        console.log("badResponse");
        console.log(badResponse);
      });
    } else {
      return;
    }
  }

  
  navigateToLogin(){
    this.router.navigate(['/login']);
  }


}
