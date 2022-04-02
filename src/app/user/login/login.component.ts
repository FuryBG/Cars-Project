import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthserviceService } from '../authservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(
    private authService: AuthserviceService,
    private router: Router
  ) { }

  login(form: NgForm) {
  this.authService.login(form.value.email, form.value.password).subscribe({
    next: () => {
      this.router.navigate(["/"]);
    },
    error: (err) => {
      console.log(err);
      
    }
  })    
  };



}
