import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {

  curItem: any = undefined;

  constructor(private route: ActivatedRoute, private productService: ProductServiceService) {
    this.getCurrTheme();
   }


  getCurrTheme() {
    this.route.params.subscribe({
      next: (data) => {
        console.log(data);
        this.productService.getById(data['id']).subscribe({
          next: (text) => {
            console.log(text);
            
            this.curItem = text;
          }
        })
      },
      error: (err) => console.log(err)
      
    });
  };
  
}
