import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {

  constructor(private router: Router, private productService: ProductServiceService) { }

  create(form: NgForm) {
    console.log(form.value);
    this.productService.postTheme(form.value).subscribe({
      next: () => {
        this.router.navigate(["/all"]);
      },
      error: (err) => console.log(err)
      
    })
  };
}
