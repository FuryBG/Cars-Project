import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { MustMatchDirective } from '../core/must-match.directive';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    MustMatchDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
})
export class UserModule { }
