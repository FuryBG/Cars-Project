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
import { NotFoundComponent } from './core/not-found/not-found.component';
import { isOwner } from './shared/guards/isOwner-guard';
import { isAuth } from './shared/guards/isAuth-guard';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HttpClientModule,
    UserModule,
  ],
  providers: [
    AuthserviceService,
    isOwner,
    isAuth,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
