import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FileSaverModule } from 'ngx-filesaver';

import { AckeeConfig, AckeeModule } from 'ngx-ackee-wrapper';

import { AppComponent } from './app.component';

const appRoutes: Routes = [
  { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) }
];

const ACKEE_CONFIG: AckeeConfig = {
  tracker: "https://nova.sals-app.com/tracker.js",
  server: "https://nova.sals-app.com",
  domainId: "1e547cc6-e9f2-40d6-8acb-f1d0a8688f8d",
  options: {
    ignoreLocalhost: true,
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
