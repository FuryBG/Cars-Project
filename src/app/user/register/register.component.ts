import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthserviceService } from '../authservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  constructor(
    private auth: AuthserviceService,
    private router: Router
  ) { }



  register(form: NgForm) {
    if(form.invalid) { return; };
    console.log(form.value.username, form.value.password);
    
    this.auth.register(form.value.email, form.value.username, form.value.password).subscribe({
      next: () => {
        this.router.navigate(["/"]);
      },
      error: (err) => {
        console.log(err);
        form.controls['email'].setErrors({invalid: true});
      }
    });
  };

}
