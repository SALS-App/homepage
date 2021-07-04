import { Component, OnInit } from '@angular/core';
import { AckeeService } from 'ngx-ackee-wrapper';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private ackeeServ: AckeeService) { }

  ngOnInit(): void {
    this.ackeeServ.visit();
  }

}
