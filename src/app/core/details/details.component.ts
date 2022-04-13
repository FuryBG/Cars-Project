import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthserviceService } from 'src/app/user/authservice.service';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {

  curItem: any = undefined;
  isOwner: boolean = false;

  constructor(private route: ActivatedRoute, private productService: ProductServiceService, private userService: AuthserviceService) {
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
            if(this.curItem.userId == this.userService.user?._id) {
              this.isOwner = true;
            };
            console.log(this.userService.user);
          }
        })
      },
      error: (err) => console.log(err)
      
    });
  };
  
}
