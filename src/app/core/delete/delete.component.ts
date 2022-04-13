import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent {

  constructor(private productService: ProductServiceService, private router: Router, private route: ActivatedRoute) { }


  deleteFunc() {
    this.route.params.subscribe({
      next: (info) => {
        this.productService.deleteTheme(info["id"]).subscribe({
          next: (data) => {
            this.router.navigate(["/all"]);
          },
          error: (err) => {
            console.log(err);
            
          }
        })
      }
    })
  };

  back() {
    this.route.params.subscribe({
      next: (info) => {
        this.router.navigate([`/details/${info["id"]}`]);
      }
    })
  };
}
