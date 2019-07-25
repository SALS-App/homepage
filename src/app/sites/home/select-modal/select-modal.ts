import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { SharedService } from 'src/app/providers/shared.service';


@Component({
  selector: 'app-selectModal',
  templateUrl: './select-modal.html',
  styleUrls: ['./select-modal.scss']
  })
  export class SelectModalDialog {

    isDownloading: boolean = true;
  
    constructor(
      public dialogRef: MatDialogRef<SelectModalDialog>,
      private ss: SharedService
      ) {}
  
    onNoClick(): void {
      this.dialogRef.close();
    }

    downloadLauncher(provider: string) {
      this.ss.change(provider);
    }

  
  
  }