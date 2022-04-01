import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthserviceService } from 'src/app/user/authservice.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent  {
  get isLog(): boolean {
    return this.authService.isLogged;
  };

  constructor(private authService: AuthserviceService, private router: Router) { 
  }

  logout() {
    this.authService.logout().subscribe(() => {
      this.router.navigate(["/"]);
    })
  };
}
