import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { HomeComponent } from './home/home.component';
import { AllcarsComponent } from './allcars/allcars.component';
import { CreateComponent } from './create/create.component';
import { FormsModule } from '@angular/forms';
import { DetailsComponent } from './details/details.component';
import { EditComponent } from './edit/edit.component';



@NgModule({
  declarations: [
    HomeComponent,
    AllcarsComponent,
    CreateComponent,
    DetailsComponent,
    EditComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule
  ],
  exports: [
  ]
})
export class CoreModule { }
