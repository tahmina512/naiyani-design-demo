import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ProductDatabaseComponent } from './product-database/product-database.component';
import { AppRoutingModule } from './app.routing.module';
import { AlertComponent } from './shared/alert/alert.component';
import { ButtonSigninComponent } from './button-signin/button-signin.component';

import { LogoOneComponent } from './logo-one/logo-one.component';
import { FirstpageComponent } from './firstpage/firstpage.component';
import { SiginWithImgComponent } from './sigin-with-img/sigin-with-img.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    LandingPageComponent,
    ProductDatabaseComponent,
    AlertComponent,
    ButtonSigninComponent,
    LogoOneComponent,
    FirstpageComponent,
    SiginWithImgComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
