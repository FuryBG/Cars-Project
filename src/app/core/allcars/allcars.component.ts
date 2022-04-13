import { Component } from '@angular/core';
import { iCar } from 'src/app/shared/interfaces';
import { AuthserviceService } from 'src/app/user/authservice.service';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-allcars',
  templateUrl: './allcars.component.html',
  styleUrls: ['./allcars.component.scss']
})
export class AllcarsComponent  {

  data: iCar[] | null | undefined;

  constructor(private productService: ProductServiceService, private authService: AuthserviceService) { 
    this.getAll();
  }

  getAll() {
    this.authService.getProfileInfo().subscribe({
      next: (user) => this.authService.user = user
    })
    this.productService.getAll().subscribe({
      next: (data) => {
        this.data = data;
        console.log(data);
        if(data.length <= 0) {
          this.data = null;
        }
        
      },
      error: (err) => {
        console.log(err);
      }
    })

  }
}
