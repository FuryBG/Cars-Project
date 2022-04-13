import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { HomeComponent } from './home/home.component';
import { AllcarsComponent } from './allcars/allcars.component';
import { CreateComponent } from './create/create.component';
import { FormsModule } from '@angular/forms';
import { DetailsComponent } from './details/details.component';
import { EditComponent } from './edit/edit.component';
import { AboutComponent } from './about/about.component';
import { DeleteComponent } from './delete/delete.component';



@NgModule({
  declarations: [
    HomeComponent,
    AllcarsComponent,
    CreateComponent,
    DetailsComponent,
    EditComponent,
    AboutComponent,
    DeleteComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
  ],
  exports: [
  ],
  providers: []
})
export class CoreModule { }
