import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { iUser } from 'src/app/shared/interfaces';
import { AuthserviceService } from '../authservice.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent {

  currUser: iUser | undefined | null;

  constructor(private route: ActivatedRoute, private authService: AuthserviceService) {
    this.currUser = this.authService.user;
    
   }

  

}
