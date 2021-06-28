import { Component, OnInit } from '@angular/core';
import { TelemetryService } from './telemetry/services/telemetry.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private telemetry: TelemetryService) { }

  ngOnInit(): void {
    this.telemetry.client.trackPageview();
  }

}
