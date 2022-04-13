import { Component } from '@angular/core';
import { AuthserviceService } from './user/authservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cars-project';

  get isAuth(): boolean {
    return this.authService.user === undefined;
  };

  constructor(private authService: AuthserviceService) { 
    this.authService.getProfileInfo().subscribe({
      error: () => {
        this.authService.user = null;
      }
    });
  }
  


}
