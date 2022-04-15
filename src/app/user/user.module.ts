import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { MustMatchDirective } from '../core/must-match.directive';
import { UserInfoComponent } from './user-info/user-info.component';
import { AppRoutingModule } from '../app-routing.module';
import { EditUserComponent } from './edit-user/edit-user.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    MustMatchDirective,
    UserInfoComponent,
    EditUserComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule,
  ],
})
export class UserModule { }
