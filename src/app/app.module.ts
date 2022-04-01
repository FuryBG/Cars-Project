import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { FooterComponent } from './core/footer/footer.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { UserModule } from './user/user.module';
import { HttpClientModule  } from '@angular/common/http';
import { AuthserviceService } from './user/authservice.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HttpClientModule,
    UserModule,
  ],
  providers: [
    AuthserviceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
