import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { DownloadComponent } from './components/download/download.component';
import { BlobDownloaderComponent } from './services/blob-downloader/blob-downloader.component';



@NgModule({
  declarations: [
    DownloadComponent,
    BlobDownloaderComponent
  ],
  imports: [
    CommonModule,
    MatProgressSpinnerModule
  ]
})
export class DownloadModule { }
