import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';

import { FileSaverModule } from 'ngx-filesaver';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DownloadComponent } from './components/download/download.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


const appRoutes: Routes = [
  { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'download/:id', component: DownloadComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    DownloadComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes, { relativeLinkResolution: 'legacy' }),
    HttpClientModule,
    FileSaverModule,
    MatProgressSpinnerModule
  ],
  bootstrap: [AppComponent],
  entryComponents: []
})
export class AppModule { }
