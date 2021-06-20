import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DownloadComponent } from 'src/app/components/download/download.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(
    private dialog: MatDialog
  ) { }

  download(): void {
    this.dialog.open(DownloadComponent, { disableClose: true });
  }
}
