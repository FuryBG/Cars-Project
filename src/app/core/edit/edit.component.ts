import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent {

  curItem: any = undefined;

  constructor(private router: Router, private route: ActivatedRoute, private productService: ProductServiceService) {
    this.loadCurrTheme();
   }

  loadCurrTheme() {
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

  edit(form: NgForm) {
    if(form.invalid) { return; }
    this.route.params.subscribe({
      next: (params) => {
        this.productService.editTheme(params['id'], form.value).subscribe({
          next: (newData) => {
            this.router.navigate([`/details/${params['id']}`]);
          },
          error: (err) => console.log(err)
          
        })
      }
    })
  };


}
