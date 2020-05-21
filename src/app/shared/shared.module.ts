import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatRippleModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

const components = [];

const moduels = [
  CommonModule,
  MatButtonModule,
  MatDialogModule,
  MatRippleModule,
  MatTooltipModule,
  MatProgressSpinnerModule
]

@NgModule({
  declarations: [ ...components ],
  imports: [ ...moduels ],
  exports: [
    ...components,
    ...moduels
  ]
})
export class SharedModule { }
