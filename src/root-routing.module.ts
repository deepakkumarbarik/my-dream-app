import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './account/login/login.component';
import { AccountComponent } from './account/account.component';
import { AppComponent } from './app/app.component';



const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: 'login'
  },
  {
    path: 'account',
    loadChildren: () => import('./account/account.module').then(m => m.AccountModule), // Lazy load account module
    data: { preload: true }
  },
  {
    path: 'app',
    loadChildren: () => import('./app/app.module').then(m => m.AppModule), // Lazy load account module
    data: { preload: true }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class RootRoutingModule { }
