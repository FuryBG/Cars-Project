import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { iUser } from 'src/app/shared/interfaces';
import { AuthserviceService } from 'src/app/user/authservice.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent  {

  get isLogged(): boolean {
    return this.authService.isLogged;
  };

  get getId(): string {
    return this.authService.user?._id || '';
  }


  userInfo: iUser | null | undefined;

  constructor(private authService: AuthserviceService, private router: Router) { 
    this.userInfo = authService.user!;

  }
  
  logout() {
    this.authService.logout().subscribe(() => {
      this.router.navigate(["/"]);
    })
  };
}
