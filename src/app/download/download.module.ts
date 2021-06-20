import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { DownloadComponent } from './components/download/download.component';



@NgModule({
  declarations: [
    DownloadComponent
  ],
  imports: [
    CommonModule,
    MatProgressSpinnerModule
  ]
})
export class DownloadModule { }
