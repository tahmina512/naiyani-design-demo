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

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    LandingPageComponent,
    ProductDatabaseComponent,
    AlertComponent,
    ButtonSigninComponent,
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
