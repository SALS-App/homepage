import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';

import { MatButtonModule } from '@angular/material/button';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './sites/home/home.component';
import { MatDialogModule } from '@angular/material/dialog';
import { SelectModalDialog } from './sites/home/select-modal/select-modal';
import { MatRippleModule } from '@angular/material/core';
import {MatTooltipModule} from '@angular/material/tooltip';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SharedService } from './providers/shared.service';


const appRoutes: Routes = [
  { path: '', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SelectModalDialog
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    MatButtonModule,
    MatDialogModule,
    MatRippleModule,
    MatTooltipModule,
    MatProgressSpinnerModule,
    HttpClientModule
  ],
  providers: [
    SharedService
  ],
  bootstrap: [AppComponent],
  entryComponents: [SelectModalDialog]
})
export class AppModule { }
