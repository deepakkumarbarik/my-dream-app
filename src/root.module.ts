import { BrowserModule, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, Injector, APP_INITIALIZER, LOCALE_ID } from '@angular/core';
import { PlatformLocation, registerLocaleData } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
//import { AbpModule } from '@abp/abp.module';
//import { AbpHttpInterceptor } from '@abp/abpHttpInterceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

//import { SharedModule } from '@shared/shared.module';
//import { ServiceProxyModule } from '@shared/service-proxies/service-proxy.module';
import { RootRoutingModule } from './root-routing.module';

//import { AppConsts } from '@shared/AppConsts';
//import { AppSessionService } from '@shared/session/app-session.service';
//import { API_BASE_URL } from '@shared/service-proxies/service-proxies';

import { RootComponent } from './root.component';
//import { AppPreBootstrap } from './AppPreBootstrap';
//import { ModalModule } from 'ngx-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { GestureConfig } from '@angular/material';

import * as _ from 'lodash';
import { AppModule } from './app/app.module';
import { AccountModule } from './account/account.module';
import { AppRouteGuard } from './shared/auth/auth-route-guard';



@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppModule,
    AccountModule,
    FormsModule,

    //SharedModule.forRoot(),
    // ModalModule.forRoot(),
    //AbpModule,
    //ServiceProxyModule,
    RootRoutingModule,
    HttpClientModule
  ],
  declarations: [
    RootComponent
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    { provide: HAMMER_GESTURE_CONFIG, useClass: GestureConfig },
    AppRouteGuard,
  ],
  bootstrap: [RootComponent]
})

export class RootModule {

}


