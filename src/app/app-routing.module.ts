import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AppRouteGuard } from 'src/shared/auth/auth-route-guard';
import { AppComponent } from './app.component';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: AppComponent,
        children: [
          { path: 'home', component: HomeComponent, canActivate: [AppRouteGuard] },
          // { path: 'users', component: UsersComponent, data: { permission: 'Pages.Users' }, canActivate: [AppRouteGuard] },
          // { path: 'roles', component: RolesComponent, data: { permission: 'Pages.Roles' }, canActivate: [AppRouteGuard] },
          // { path: 'tenants', component: TenantsComponent, data: { permission: 'Pages.Tenants' }, canActivate: [AppRouteGuard] },
          // { path: 'about', component: AboutComponent },
          // { path: 'update-password', component: ChangePasswordComponent }
        ]
      }
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
