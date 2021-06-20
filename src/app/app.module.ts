import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';

import { FileSaverModule } from 'ngx-filesaver';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BlobDownloaderService } from './providers/blob-downloader.service';
import { DownloadComponent } from './components/download/download.component';
import { MainComponent } from './components/home/main/main.component';
import { SharedModule } from './shared/shared.module';


const appRoutes: Routes = [
  { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'download/:id', component: DownloadComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    DownloadComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes, { relativeLinkResolution: 'legacy' }),
    HttpClientModule,
    FileSaverModule,
    SharedModule
  ],
  providers: [
    BlobDownloaderService
  ],
  bootstrap: [AppComponent],
  entryComponents: []
})
export class AppModule { }
