import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { AuthComponent } from './auth/auth.component';
import { ProductDatabaseComponent } from './product-database/product-database.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ButtonSigninComponent } from './button-signin/button-signin.component';

import { LogoOneComponent } from './logo-one/logo-one.component';
import { FirstpageComponent } from './firstpage/firstpage.component';
import { SiginWithImgComponent } from './sigin-with-img/sigin-with-img.component';
import { LeadsListComponent } from './leads-list/leads-list.component';
const appRoutes: Routes = [
  { path: '', component: FirstpageComponent },
  { path: 'signin', component: AuthComponent },
  { path: 'product-demo', component: ProductDatabaseComponent },
  { path: 'signin-demo', component: ButtonSigninComponent },
  { path: 'logo', component: LogoOneComponent },
  { path: 'siginImg', component: SiginWithImgComponent },
  {
    path: 'landing',
    component: LandingPageComponent,
  },
  {
    path: 'leads',
    component: LeadsListComponent,
  },
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
