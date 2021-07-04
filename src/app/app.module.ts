import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { FileSaverModule } from 'ngx-filesaver';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AckeeConfig, AckeeModule } from 'ngx-ackee-wrapper';

const appRoutes: Routes = [
  { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) }
];

const ACKEE_CONFIG: AckeeConfig = {
  tracker: "https://nova.sals-app.com/tracker.js",
  server: "https://nova.sals-app.com",
  domainId: "6f8218cd-5be8-42df-91dc-e70f3e294f3e",
  options: {
    ignoreLocalhost: false,
    detailed: true,
    // ignoreOwnVisits: true,
  },
  dev: false,
  ignore: false,
};


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes, { relativeLinkResolution: 'legacy', initialNavigation: 'enabled' }),
    HttpClientModule,
    FileSaverModule,
    AckeeModule.forRoot(ACKEE_CONFIG)
  ],
  bootstrap: [AppComponent],
  entryComponents: []
})
export class AppModule { }
