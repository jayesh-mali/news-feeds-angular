import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  loginForm = new FormGroup({
    email: new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('',[Validators.required]),
  });

  isSubmitted: any;


  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.isSubmitted = false;

  }

  login() {
    this.isSubmitted = true;
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe((res) => {
        this.authService.setAuthorizationToken(res.headers);
        this.authService.setUserInformation(res.body.data);
        this.router.navigate(['/news-feeds']);
      }, (badResponse) => {
        console.log("badResponse");
        console.log(badResponse);
      });
    } else {
      return;
    }
  }

  navigateToSignup(){
    this.router.navigate(['/signup']);
  }

}
