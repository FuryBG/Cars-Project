import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { isOwner } from './guards/isOwner-guard';
import { isAuth } from './guards/isAuth-guard';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
})
export class SharedModule { }
