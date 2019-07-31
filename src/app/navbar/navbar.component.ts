import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  roles = [];
  hasAdminRole = false;
  
  ngOnInit() {
    var user_roles = localStorage.getItem('roles')
    if(user_roles){
      this.roles = user_roles.split(",");
      this.hasAdminRole = this.roles.includes("admin");
    }
  }

  logout(){
    this.authService.logout().subscribe((res) => {
      this.authService.resetLocalStorage();
      this.router.navigate(['/login']);
    }, (badResponse) => {
      console.log("badResponse");
      console.log(badResponse);
    });
  }

}
