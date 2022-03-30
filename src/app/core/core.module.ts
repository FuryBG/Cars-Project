import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { HomeComponent } from './home/home.component';
import { AllcarsComponent } from './allcars/allcars.component';



@NgModule({
  declarations: [
    HomeComponent,
    AllcarsComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: []
})
export class CoreModule { }
