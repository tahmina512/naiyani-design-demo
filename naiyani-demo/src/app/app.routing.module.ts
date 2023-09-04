import { RouterModule, Routes } from '@angular/router';


import { NgModule } from '@angular/core';
import { AuthComponent } from './auth/auth.component';
import { ProductDatabaseComponent } from './product-database/product-database.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
const appRoutes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'signin', component: AuthComponent },
  { path: 'product-demo', component: ProductDatabaseComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
