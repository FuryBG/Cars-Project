import { Component } from '@angular/core';
import { iCar } from 'src/app/shared/interfaces';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-allcars',
  templateUrl: './allcars.component.html',
  styleUrls: ['./allcars.component.scss']
})
export class AllcarsComponent  {

  data: iCar[] | null | undefined;

  constructor(private productService: ProductServiceService) { 
    this.getAll();
  }

  getAll() {
    this.productService.getAll().subscribe({
      next: (data) => {
        this.data = data;
        console.log(data);
        
      },
      error: (err) => {
        console.log(err);
        this.data = null;
      }
    })
  }

}
