import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { iUser } from 'src/app/shared/interfaces';
import { AuthserviceService } from '../authservice.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent {

  currUser: iUser | undefined | null = undefined;

  constructor(private authService: AuthserviceService, private router: Router, private route: ActivatedRoute) { 
    this.currUser = this.authService.user;
  }

  edit(form: NgForm) {
    this.authService.editProfileInfo(form.value.email, form.value.username).subscribe({
      next: (data) => {
        console.log(form.errors);
        this.router.navigate([`/user/${this.currUser?._id}`]);
      },
      error: (err) => {
        console.log(err);
        form.controls['email'].setErrors({invalid: true});
      }
    })
  };



}
