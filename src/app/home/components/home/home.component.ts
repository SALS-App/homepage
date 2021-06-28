import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DownloadComponent } from 'src/app/download/components/download/download.component';
import { TelemetryService } from 'src/app/telemetry/services/telemetry.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private dialog: MatDialog,
    private telemetry: TelemetryService
  ) { }

  ngOnInit() {
    this.telemetry.client.enableAutoOutboundTracking();
  }

  download(): void {
    this.dialog.open(DownloadComponent, { disableClose: true });
  }
}
