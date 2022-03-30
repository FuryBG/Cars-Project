import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllcarsComponent } from './core/allcars/allcars.component';
import { HomeComponent } from './core/home/home.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';

const routes: Routes = [
  {path: "", pathMatch: "full", component: HomeComponent},
  {path: "all", component: AllcarsComponent},
  {path: "login", component: LoginComponent},
  {path: "register", component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
