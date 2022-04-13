import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './core/about/about.component';
import { AllcarsComponent } from './core/allcars/allcars.component';
import { CreateComponent } from './core/create/create.component';
import { DetailsComponent } from './core/details/details.component';
import { EditComponent } from './core/edit/edit.component';
import { HomeComponent } from './core/home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { isAuth } from './shared/guards/isAuth-guard';
import { isOwner } from './shared/guards/isOwner-guard';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { UserInfoComponent } from './user/user-info/user-info.component';

const routes: Routes = [
  {path: "", pathMatch: "full", component: HomeComponent},
  {path: "all", component: AllcarsComponent},
  {path: "login", component: LoginComponent, canActivate: [isAuth]},
  {path: "register", component: RegisterComponent},
  {path: "create", component: CreateComponent},
  {path: "details/:id", component: DetailsComponent},
  {path: "edit/:id", component: EditComponent, canActivate: [isOwner]},
  {path: "about", component: AboutComponent},
  {path: "user/:id", component: UserInfoComponent},
  {path: "**", component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
