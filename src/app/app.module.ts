
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppRouteGuard } from 'src/shared/auth/auth-route-guard';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [

    AppRoutingModule
  ],
  providers: [AppRouteGuard],

})
export class AppModule { }
